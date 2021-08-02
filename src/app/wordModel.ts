export interface wordMeaningModel {
      word: String,
      phonetics: [
        {
          text: String,
          audio: string
        }
      ],
      meanings: [
        {
          partOfSpeech: String,
          definitions: [
            {
              definition: String,
              synonyms: String[],
              example: String
            }
          ]
        }
      ]
    }