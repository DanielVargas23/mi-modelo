// Generado por el cuaderno plantilla_tu_modelo.ipynb. No lo edites a mano.
window.MODELO = {
  "version": "2.0.0",
  "proyecto": "Predictor de precio de diamantes",
  "fuente": {
    "nombre": "Diamonds (seaborn-data)",
    "url": "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/diamonds.csv",
    "portal": "",
    "id": ""
  },
  "fecha_entrenamiento": "2026-10-03",
  "n_total": 53940,
  "n_entrenamiento": 43152,
  "n_prueba": 10788,
  "semilla": 42,
  "min_casos": 216,
  "sklearn_version": "1.6.1",
  "objetivo": {
    "nombre": "price",
    "etiqueta": "Precio",
    "minimo": 0.0,
    "maximo": 20000,
    "unidad": "USD",
    "tipo": "numero"
  },
  "metricas": {
    "modelo": {
      "clave": "lineal",
      "nombre": "Regresión lineal (Ridge)",
      "mae": 1103.0285931112107,
      "rmse": 1857.5243971693599,
      "r2": 0.782950516450193,
      "publicado": true
    },
    "linea_base": {
      "clave": "linea_base",
      "nombre": "Línea base: siempre el promedio",
      "mae": 3020.5058390529985,
      "rmse": 3987.2221763258735,
      "r2": -7.04060323410971e-05
    },
    "comparacion": [
      {
        "clave": "linea_base",
        "nombre": "Línea base: siempre el promedio",
        "mae": 3020.5058390529985,
        "rmse": 3987.2221763258735,
        "r2": -7.04060323410971e-05
      },
      {
        "clave": "lineal",
        "nombre": "Regresión lineal (Ridge)",
        "mae": 1103.0285931112107,
        "rmse": 1857.5243971693599,
        "r2": 0.782950516450193,
        "publicado": true
      },
      {
        "clave": "arbol",
        "nombre": "Árbol de decisión",
        "mae": 588.4016545834546,
        "rmse": 1085.2709412059141,
        "r2": 0.9259088982387329
      },
      {
        "clave": "bosque",
        "nombre": "Bosque aleatorio (50 árboles)",
        "mae": 387.56476430033314,
        "rmse": 700.8243264370672,
        "r2": 0.9691035885361189
      },
      {
        "clave": "boosting",
        "nombre": "Gradient Boosting",
        "mae": 294.94458186634984,
        "rmse": 567.0109445048666,
        "r2": 0.9797757424542989
      }
    ]
  },
  "cobertura_mae": 0.7257137560252132,
  "promedio_nacional": 3932.799721913237,
  "promedio_entrenamiento": 3939.490707267334,
  "tipo": "lineal",
  "algoritmo": "Ridge (alpha = 1) con codificación one-hot",
  "algoritmo_corto": "Regresión lineal",
  "variables": [
    {
      "nombre": "carat",
      "etiqueta": "Peso en quilates",
      "etiqueta_corta": "Peso en quilates",
      "grupo": "caso",
      "ayuda": "Elige el rango.",
      "tipo": "categoria",
      "mas_frecuente": "0,54 a 0,90",
      "categorias": [
        {
          "valor": "hasta 0,35",
          "etiqueta": "hasta 0,35",
          "coeficiente": -3755.3234880483133,
          "frecuencia": 0.20302651093807936,
          "n": 8761,
          "en_formulario": true
        },
        {
          "valor": "0,35 a 0,54",
          "etiqueta": "0,35 a 0,54",
          "coeficiente": -3079.697428237072,
          "frecuencia": 0.20844920281794588,
          "n": 8995,
          "en_formulario": true
        },
        {
          "valor": "0,54 a 0,90",
          "etiqueta": "0,54 a 0,90",
          "coeficiente": -1340.9383796240834,
          "frecuencia": 0.2111142009640341,
          "n": 9110,
          "en_formulario": true
        },
        {
          "valor": "0,90 a 1,13",
          "etiqueta": "0,90 a 1,13",
          "coeficiente": 1621.861725845012,
          "frecuencia": 0.17901835372636263,
          "n": 7725,
          "en_formulario": true
        },
        {
          "valor": "más de 1,13",
          "etiqueta": "más de 1,13",
          "coeficiente": 6554.097570047676,
          "frecuencia": 0.19839173155357806,
          "n": 8561,
          "en_formulario": true
        }
      ],
      "importancia": 3226.0405690635835
    },
    {
      "nombre": "cut",
      "etiqueta": "Calidad del corte",
      "etiqueta_corta": "Calidad del corte",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "Ideal",
      "categorias": [
        {
          "valor": "Fair",
          "etiqueta": "Regular",
          "coeficiente": -322.936256869198,
          "frecuencia": 0.029546718576195775,
          "n": 1275,
          "en_formulario": true
        },
        {
          "valor": "Good",
          "etiqueta": "Bueno",
          "coeficiente": 3.884914348295896,
          "frecuencia": 0.09042454579162032,
          "n": 3902,
          "en_formulario": true
        },
        {
          "valor": "Very Good",
          "etiqueta": "Muy bueno",
          "coeficiente": 95.44435533551163,
          "frecuencia": 0.22478680014831295,
          "n": 9700,
          "en_formulario": true
        },
        {
          "valor": "Premium",
          "etiqueta": "Premium",
          "coeficiente": 84.6391974291442,
          "frecuencia": 0.25528364849833146,
          "n": 11016,
          "en_formulario": true
        },
        {
          "valor": "Ideal",
          "etiqueta": "Ideal",
          "coeficiente": 138.96778976294078,
          "frecuencia": 0.3999582869855395,
          "n": 17259,
          "en_formulario": true
        }
      ],
      "importancia": 41.85012601977268
    },
    {
      "nombre": "color",
      "etiqueta": "Color (D es el mejor, J el peor)",
      "etiqueta_corta": "Color (D es el mejor, J el peor)",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "G",
      "categorias": [
        {
          "valor": "D",
          "etiqueta": "D",
          "coeficiente": 608.3736992492397,
          "frecuencia": 0.12544030404152762,
          "n": 5413,
          "en_formulario": true
        },
        {
          "valor": "E",
          "etiqueta": "E",
          "coeficiente": 415.3314038621209,
          "frecuencia": 0.1822163515016685,
          "n": 7863,
          "en_formulario": true
        },
        {
          "valor": "F",
          "etiqueta": "F",
          "coeficiente": 370.67484337564974,
          "frecuencia": 0.1771412680756396,
          "n": 7644,
          "en_formulario": true
        },
        {
          "valor": "G",
          "etiqueta": "G",
          "coeficiente": 200.49303729835626,
          "frecuencia": 0.208912680756396,
          "n": 9015,
          "en_formulario": true
        },
        {
          "valor": "H",
          "etiqueta": "H",
          "coeficiente": -168.1603200820896,
          "frecuencia": 0.15542732665925102,
          "n": 6707,
          "en_formulario": true
        },
        {
          "valor": "I",
          "etiqueta": "I",
          "coeficiente": -345.01802750403596,
          "frecuencia": 0.09904523544679274,
          "n": 4274,
          "en_formulario": true
        },
        {
          "valor": "J",
          "etiqueta": "J",
          "coeficiente": -1081.6946362020287,
          "frecuencia": 0.05181683351872451,
          "n": 2236,
          "en_formulario": true
        }
      ],
      "importancia": 321.9173858331889
    },
    {
      "nombre": "clarity",
      "etiqueta": "Pureza",
      "etiqueta_corta": "Pureza",
      "grupo": "caso",
      "ayuda": "",
      "tipo": "categoria",
      "mas_frecuente": "SI1",
      "categorias": [
        {
          "valor": "I1",
          "etiqueta": "I1",
          "coeficiente": -2925.3206291303795,
          "frecuencia": 0.013556729699666295,
          "n": 585,
          "en_formulario": true
        },
        {
          "valor": "SI2",
          "etiqueta": "SI2",
          "coeficiente": -636.3913731288529,
          "frecuencia": 0.16930849091583242,
          "n": 7306,
          "en_formulario": true
        },
        {
          "valor": "SI1",
          "etiqueta": "SI1",
          "coeficiente": -136.2666671095926,
          "frecuencia": 0.24378939562476826,
          "n": 10520,
          "en_formulario": true
        },
        {
          "valor": "VS2",
          "etiqueta": "VS2",
          "coeficiente": 320.73143654202113,
          "frecuencia": 0.22694197256210605,
          "n": 9793,
          "en_formulario": true
        },
        {
          "valor": "VS1",
          "etiqueta": "VS1",
          "coeficiente": 514.3356742776546,
          "frecuencia": 0.15132554690396738,
          "n": 6530,
          "en_formulario": true
        },
        {
          "valor": "VVS2",
          "etiqueta": "VVS2",
          "coeficiente": 798.0078912277961,
          "frecuencia": 0.09371523915461624,
          "n": 4044,
          "en_formulario": true
        },
        {
          "valor": "VVS1",
          "etiqueta": "VVS1",
          "coeficiente": 840.2681905403997,
          "frecuencia": 0.0682239525398591,
          "n": 2944,
          "en_formulario": true
        },
        {
          "valor": "IF",
          "etiqueta": "IF",
          "coeficiente": 1224.6354767822465,
          "frecuencia": 0.03313867259918428,
          "n": 1430,
          "en_formulario": true
        }
      ],
      "importancia": 477.2479036990947
    }
  ],
  "excluidas": [],
  "casos_prueba": [
    {
      "id": 1,
      "entradas": {
        "carat": "hasta 0,35",
        "cut": "Ideal",
        "color": "I",
        "clarity": "VS1"
      },
      "puntaje_real": 434.0,
      "prediccion_sklearn": 213.98750498215304
    },
    {
      "id": 2,
      "entradas": {
        "carat": "0,54 a 0,90",
        "cut": "Ideal",
        "color": "J",
        "clarity": "SI1"
      },
      "puntaje_real": 1889.0,
      "prediccion_sklearn": 1241.0936633211431
    },
    {
      "id": 3,
      "entradas": {
        "carat": "0,54 a 0,90",
        "cut": "Ideal",
        "color": "H",
        "clarity": "VS2"
      },
      "puntaje_real": 4007.0,
      "prediccion_sklearn": 2611.626083092696
    },
    {
      "id": 4,
      "entradas": {
        "carat": "0,90 a 1,13",
        "cut": "Good",
        "color": "E",
        "clarity": "SI1"
      },
      "puntaje_real": 5411.0,
      "prediccion_sklearn": 5565.836933439743
    },
    {
      "id": 5,
      "entradas": {
        "carat": "más de 1,13",
        "cut": "Very Good",
        "color": "E",
        "clarity": "SI1"
      },
      "puntaje_real": 6373.0,
      "prediccion_sklearn": 10589.632218629624
    }
  ],
  "textos": {
    "titulo": "Predictor de precio de diamantes",
    "subtitulo": "Machine Learning 1 · Universidad EAN",
    "pregunta": "¿Cuánto vale un diamante?",
    "aviso_etico": "Es una estimación con error: úsala para aprender y discutir, no para tomar decisiones importantes.",
    "etiqueta_promedio": "Promedio de los datos",
    "subetiqueta_medidor": "USD",
    "autor": "Daniel Vargas",
    "autor_url": "https://github.com/DanielVargas23",
    "grupos": {
      "caso": "Datos del caso"
    }
  },
  "intercepto": 3661.025556493907
};
