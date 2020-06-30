
 const formConfig = {
  "title": "(dev) Domanda dipartecipazione",
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':3},
                {'type':"maxLength",'value':7}
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':3},
                {'type':"maxLength",'value':12}
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':2},
                {'type':"maxLength",'value':23}
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':2},
                {'type':"maxLength",'value':22}
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':3},
                {'type':"maxLength",'value':33}
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':3},
                {'type':"maxLength",'value':33}
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
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':2},
                {'type':"maxLength",'value':13}
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
                  "value": "", 
                  "title": ""
                },
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
              "rules":[
                {'type':"required"}
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



