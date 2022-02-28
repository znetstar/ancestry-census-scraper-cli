import {Command, Flags} from '@oclif/core'
import { AncestryCensusScraper, AncestryCensusQuery } from '@znetstar/ancestry-census-scraper/lib/index';
import * as fs from 'fs-extra';
import { json2csvAsync } from 'json-2-csv';

export default class Format extends Command {
  static description = 'Formats census records as JSON or ARFF'

  static examples = [
    `$ cat misc/results.ldjson | ancestry-census-scraper-cli format -f arff > misc/results.arff`,
    `$ cat misc/results.ldjson | ancestry-census-scraper-cli format -f json > misc/results.json`,
    `$ cat misc/results.ldjson | ancestry-census-scraper-cli format -f csv > misc/results.csv`
  ]

  static flags = {
    format: Flags.enum({
      char: 'f',
      description: 'Output format',
      required: true,
      options: [ 'arff', 'json', 'csv' ]
    }),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Format)

    let buf: Buffer = (await new Promise<Buffer>((resolve, reject) => {
      process.stdin.resume();
      let buf: Buffer[] = [];
      process.stdin.on('data', (chunk: Buffer) => {
        buf.push(chunk);
      });
      process.stdin.once('error', (err) => { reject(err); });;
      process.stdin.once('end', () => { resolve(Buffer.concat(buf)); });
    }));

    const arr = buf.toString('utf8').split("\n").filter((j) => j.length).map((j) => JSON.parse(j));

    if (flags.format === 'json') {
      process.stdout.write(JSON.stringify(arr));
    } else if (flags.format === 'arff') {
      const arff = {
        relation: 'AncestryCensusHouseholdMember',
        attributes: [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "age",
            "type": "numeric"
          },
          {
            "name": "estimatedBirthYear",
            "type": "string"
          },
          {
            "name": "gender",
            "type": "string"
          },
          {
            "name": "race",
            "type": "string"
          },
          {
            "name": "birthplace",
            "type": "string"
          },
          {
            "name": "maritalStatus",
            "type": "string"
          },
          {
            "name": "relationToHeadOfHouse",
            "type": "string"
          },
          {
            "name": "homeIn1940",
            "type": "string"
          },
          {
            "name": "mapOfHomeIn1940",
            "type": "string"
          },
          {
            "name": "farm",
            "type": "numeric"
          },
          {
            "name": "inferredResidenceIn1935",
            "type": "string"
          },
          {
            "name": "residenceIn1935",
            "type": "string"
          },
          {
            "name": "residentOnFarmIn1935",
            "type": "numeric"
          },
          {
            "name": "sheetNumber",
            "type": "string"
          },
          {
            "name": "numberOfHouseholdInOrderOfVisitation",
            "type": "numeric"
          },
          {
            "name": "occupation",
            "type": "string"
          },
          {
            "name": "industry",
            "type": "string"
          },
          {
            "name": "houseOwnedOrRented",
            "type": "string"
          },
          {
            "name": "valueOfHomeOrMonthlyRentalIfRented",
            "type": "string"
          },
          {
            "name": "attendedSchoolOrCollege",
            "type": "numeric"
          },
          {
            "name": "highestGradeCompleted",
            "type": "string"
          },
          {
            "name": "hoursWorkedWeekPriorToCensus",
            "type": "numeric"
          },
          {
            "name": "classOfWorker",
            "type": "string"
          },
          {
            "name": "weeksWorkedIn1939",
            "type": "numeric"
          },
          {
            "name": "income",
            "type": "numeric"
          },
          {
            "name": "incomeOtherSources",
            "type": "numeric"
          },
          {
            "name": "neighbors",
            "type": "string"
          },
          {
            "name": "numberOfHouseholdMembers",
            "type": "numeric"
          },
          {
            "name": "approximateAge",
            "type": "numeric"
          },
          {
            "name": "householdLocation",
            "type": "string"
          },
          {
            "name": "respondent",
            "type": "numeric"
          },
          {
            "name": "alternativeName",
            "type": "numeric"
          },
          {
            "name": "houseNumber",
            "type": "numeric"
          },
          {
            "name": "fathersBirthplace",
            "type": "string"
          },
          {
            "name": "mothersBirthplace",
            "type": "string"
          },
          {
            "name": "nativeLanguage",
            "type": "string"
          },
          {
            "name": "veteran",
            "type": "numeric"
          },
          {
            "name": "socialSecurityNumber",
            "type": "numeric"
          },
          {
            "name": "usualOccupation",
            "type": "string"
          },
          {
            "name": "usualIndustry",
            "type": "string"
          },
          {
            "name": "usualClassOfWorker",
            "type": "string"
          },
          {
            "name": "street",
            "type": "string"
          },
          {
            "name": "institution",
            "type": "string"
          },
          {
            "name": "alternativeAge",
            "type": "numeric"
          },
          {
            "name": "alternativeEstimatedBirthYear",
            "type": "numeric"
          },
          {
            "name": "durationOfUnemployment",
            "type": "numeric"
          },
          {
            "name": "womanMarriages",
            "type": "numeric"
          },
          {
            "name": "womanAgeAtFirstMarriage",
            "type": "numeric"
          },
          {
            "name": "numberOfChildrenEverBorn",
            "type": "numeric"
          },
          {
            "name": "citizenship",
            "type": "string"
          },
          {
            "name": "alternativeRace",
            "type": "numeric"
          },
          {
            "name": "veteranFatherDead",
            "type": "numeric"
          },
          {
            "name": "militaryService",
            "type": "numeric"
          },
          {
            "name": "temporarilyAbsent",
            "type": "numeric"
          },
          {
            "name": "householdMembersAge",
            "type": "string"
          },
          {
            "name": "householdMembersRelationship",
            "type": "string"
          }
        ],
        data: arr
      };

      const out = require('arff').format(arff);
      process.stdout.write(out);
    }
    else if (flags.format === 'csv') {
      const str = await json2csvAsync(arr);
      process.stdout.write(str);
    }
    else {
      process.exit(1);
    }

    process.exit(0);
  }
}
