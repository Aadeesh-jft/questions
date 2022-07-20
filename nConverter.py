#This program converts any given number to written form (in english)
#max constraint = 999 Trillion
def numToWordConverter(n):

    numOnes = {1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 
    6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 
    11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 
    15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 
    19: "Nineteen"}
    numTens = {20: "Twenty", 30: "Thirty", 40: "Forty", 
    50: "Fifty", 60: "Sixty", 70: "Seventy", 80: "Eighty", 
    90: "Ninety"}
  
    def numberToWord(num):
        outputString = ""
        hundreds = num // 100
        tens = (num - (hundreds * 100 )) // 10
        ones = (num - (hundreds * 100) - (tens * 10))
        if ((hundreds + tens + ones) == 0):
            return " "
        else:
            if (1 <= hundreds <= 9):
                outputString += (numOnes[hundreds]) + " Hundred "
            if (9 < ((tens * 10) + ones) < 20):
                outputString += numOnes[tens * 10 + ones] + " "
                return (outputString)
            if (1 < tens < 10):
                outputString += numTens[tens * 10] + " "
            if (1 <= ones < 10):
                outputString += numOnes[ones] + " "
        return (outputString)

    outputString = ""
    trillions = n // 1000000000000
    billions = ((n - (trillions * 1000000000000)) // 1000000000)
    millions = ((n - (trillions * 1000000000000) - (billions * 1000000000)) // 1000000)
    thousands = ((n - (trillions * 1000000000000) - (billions * 1000000000) - (millions * 1000000)) // 1000)
    hundreds = n % 1000

    #print(trillions, billions, millions, thousands, hundreds)

    if (trillions + billions + millions + thousands + hundreds == 0):
        print("Zero")
    if (trillions > 0):
        outputString += numberToWord(trillions) + " Trillion "
    if (billions > 0):
        outputString += numberToWord(billions) + " Billion "
    if (millions > 0):
        outputString += numberToWord(millions) + " Million "
    if (thousands > 0):
        outputString += numberToWord(thousands) + " Thousand "
    if (hundreds > 0):
        outputString += numberToWord(hundreds)

    return (outputString)
