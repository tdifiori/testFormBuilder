
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
              "defaultValue":"",
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
              "defaultValue":"",
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
              "defaultValue":"",
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
              "defaultValue":"",
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
              "defaultValue":"",
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
              "defaultValue":"",
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
              "defaultValue":"",
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
              "defaultValue":"",
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



