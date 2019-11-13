export default {
    payment_requirements: {
        pay_for_model: {
            "unit": "ether",
            "value": 5
        }
    },
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
                "s1": "Blood serum measurement 1 obtained for each patient",
                "s2": "Blood serum measurement 2 obtained for each patient",
                "s3": "Blood serum measurement 3 obtained for each patient",
                "s4": "Blood serum measurement 4 obtained for each patient",
                "s5": "Blood serum measurement 5 obtained for each patient",
                "s6": "Blood serum measurement 6 obtained for each patient",
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