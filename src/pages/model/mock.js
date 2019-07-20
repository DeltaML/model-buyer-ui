export default {
    dataRequirements: {
      features: {
      "list": [
        "age",
        "sex",
        "bmi",
        "bp",
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6"
      ],
      "range": [
        -2,
        2
      ],
      "pre_processing": [
        {
          "method": "standard",
          "parameters": "mean"
        }
      ],
      "desc": {
        "age": "age of the patient",
        "sex": "sex of the patient",
        "bmi": "body mass index of the patient",
        "bp": "average blood pressure of the patient",
        "s1 to s6": "Six blood serum measurements obtained for each patient"
      }
    },
      target: {
      "range": [
        25,
        346
      ],
      "desc": [
        "A quantitative measure of disease progression one year after baseline."
      ]
    }
    }
  };