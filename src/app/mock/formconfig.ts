
 const formConfig = {
    "title": "Domanda dipartecipazione",
    "description": "Eventuale descrizione della form",
    "sections": [
      {
        "title": "Dati anagrafici e recapiti",
        "rows": [
          {
            "fields": [
              {
                "label": "Nome",
                "type": "text",
                "key": "nome",
                 "rules": 
                  [
                    "Validators.required",
                    "Validators.minLength(3)",
                    "Validators.maxLength(5)"
                  ]
              }
            ]
          },
          {
            "fields": [
              {
                "label": "Cognome",
                "type": "text",
                "key": "cognome",
                "rules": [
                  'Validators.required',
                  'Validators.minLength(2)',
                  'Validators.maxLength(4)'
               ]
              }
            ]
          },
          {
            "fields": [
              {
                "label": "Data",
                "type": "text",
                "key": "data",
                "rules": [
                  'Validators.required',
                  'Validators.minLength(8)',
                  'Validators.maxLength(8)'
               ]
              }
            ]
          },
          {
            "fields": [
              {
                "label": "Luogo",
                "type": "text",
                "key": "luogo",
                "rules": [
                  'Validators.required',
                  'Validators.minLength(6)',
                  'Validators.maxLength(7)'
               ]
              }
            ]
          }
        ]  
      },
      {
        "title": "Dichiarazioni",
        "rows": [
          {
            "fields": [
              {
                "label": "Dichiarazione 1",
                "type": "text",
                "key": "dichiarazione1",
                "rules": [
                  'Validators.required',
                  'Validators.minLength(12)',
                  'Validators.maxLength(14)'
               ]
              }
            ]
          },
          {
            "fields": [
              {
                "label": "Dichiarazione 2",
                "type": "text",
                "key": "dichiarazione2",
                "rules": [
                  'Validators.required',
                  'Validators.minLength(12)',
                  'Validators.maxLength(14)'
               ]
              }
            ]
          }
        ]   
      },
      {
        "title": "Titoli di studio",
        "rows": [
          {
            "fields": [
              {
                "label": "Titolo professionale",
                "type": "text",
                "key": "titolo",
                "rules": [
                  'Validators.required',
                  'Validators.minLength(2)',
                  'Validators.maxLength(5)'
               ]
              }
            ]
          },
          {
            "fields": [
              {
                "label": "Indirizzo titolo",
                "type": "select",
                "key": "indirizzo_titolo",
                "options": [
                  { 
                    "value": "Informatica", 
                    "title": "Informatica"
                  },
                  {
                    "value": "Elettronica",
                    "title": "Elettronica"
                  },
                  {
                    "value": "Fisica",
                    "title": "Fisica"
                  }
                ],
                "rules": [
                  'Validators.required',
                  'Validators.minLength(6)',
                  'Validators.maxLength(6)'
               ]
              }
            ]
          }
        ]  
      }
    ],
    "awards": []
  }
 
 
  export default formConfig;



