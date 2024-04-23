# Function expects 2 arguments. The string to reverse and an option 1 or 2.
# 1 to reverse the sentence, 2 to reverse words in place.

def reverseWithOptions(string, input):
    tempWrd = ""
    tempSentence = ""
    for i, not_used in enumerate(string):
        if input == 1:
            j = len(string) - i - 1
        if input == 2:
            j = i
        if string[j] != " ":
            tempWrd += string[j]
            continue
        for k, not_used_either in enumerate(tempWrd):
            l = len(tempWrd) - k - 1
            tempSentence += tempWrd[l]
        tempSentence += " "
        tempWrd = ""
    for m, also_not_used_either in enumerate(tempWrd):
        n = len(tempWrd) - m - 1
        tempSentence += tempWrd[n]
    print(tempSentence)
reverseWithOptions("Hello world", 2)
reverseWithOptions("I can reverse big sentences as well but probably still suck at weird edge cases", 1)