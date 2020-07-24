
 const formConfig = {
  "title": "(dev) Form builder test",
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
            },
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
            },
            {
              "label": "Data",
              "type": "text",
              "key": "datanascita",
              "defaultValue":"",
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':2},
                {'type':"maxLength",'value':23}
              ]
            },
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
        },
      ]  
    },
    {
      "title": "Descrizione",
      "rows": [
        {
          "fields": [
            {
              "label": "Descrizione 1",
              "type": "text",
              "key": "Descrizione1",
              "defaultValue":"",
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':3},
                {'type':"maxLength",'value':33}
              ]
            },
            {
              "label": "Accetta 1",
              "type": "radio",
              "key": "accetta1",
              "defaultValue":"",
              "value":"accetta1",
              "rules":[
                {'type':"required"}
              ]
            }
          ]
        },
        {
          "fields": [
            {
              "label": "Descrizione 2",
              "type": "text",
              "key": "Descrizione2",
              "defaultValue":"",
              "rules":[
                {'type':"required"},
                {'type':"minLength",'value':3},
                {'type':"maxLength",'value':33}
              ]
            },
            {
              "label": "Accetta 2",
              "type": "radio",
              "key": "accetta2",
              "defaultValue":"",
              "value":"accetta2",
              "rules":[
                {'type':"required"}
              ]
            }
          ]
        },
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
            },
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
            },
            {
              "label": "Data",
              "type": "date",
              "key": "data",
              "defaultValue":"",
              "rules":[
                {'type':"required"}
              ]
            }
          ]
        }
      ]  
    },
    {
      "title": "Form status",
      "rows": [
        {
          "fields": [
            {
              "type": "button",
              "key": "button",
              "value": "invia"
            }
          ]
        }
      ]  
    }
  ],
   
  "awards": []
}


export default formConfig;



