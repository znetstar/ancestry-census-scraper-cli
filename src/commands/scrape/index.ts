import {Command, Flags} from '@oclif/core'
import { AncestryCensusScraper, AncestryCensusQuery } from '@znetstar/ancestry-census-scraper/lib/index';
import * as fs from 'fs-extra';

export default class Scrape extends Command {
  static description = 'Scrapes ancestry census records. Accepts query as STDIN, and outputs each census record as JSON via STDOUT'

  static examples = [
    `$ echo '{ "livedIn": "New York County, USA", "census": 1940 }' | ancestry-census-scraper-cli scrape -j misc/cookies.json -H -n 1000`,
  ]

  static flags = {
    jar: Flags.string({
      char: 'j',
      description: 'Path to cookie jar (containing Ancestry session cookies)',
      required: true
    }),
    count: Flags.integer({
      char: 'n',
      description: 'Maximum number of entries to pull. If undefined will pull all census records matching the query',
      required: false
    }),
    noHeadless: Flags.boolean({
      char: 'H',
      description: 'Run with headless browser'
    })
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Scrape)

    let rawQuery: string = (await new Promise<Buffer>((resolve, reject) => {
      process.stdin.resume();
      let buf: Buffer[] = [];
      process.stdin.on('data', (chunk: Buffer) => buf.push(chunk));
      process.stdin.once('error', (err) => { reject(err); });;
      process.stdin.once('end', () => { resolve(Buffer.concat(buf)); });
    })).toString('utf8');

    const query: AncestryCensusQuery = JSON.parse(rawQuery);
    const cookies = await fs.readFile(flags.jar);

    // @ts-ignore
    const scraper = new AncestryCensusScraper({
      cookies,
      playwrightOptions: {
        headless: !flags.noHeadless
      }
    });

    await scraper.initBrowser();

    let i = 0;

    for await (const person of scraper.scrape(query)) {
      delete person.relations;
      process.stdout.write(JSON.stringify(person) + "\n");
      if (flags.count && i++ > flags.count)
        break;
    }

    process.exit(0);
  }
}
