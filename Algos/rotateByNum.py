def rotateStrByNum(str, num):
    num = num%len(str)
    front = ""
    back = ""
    for index,letter in enumerate(str):
        if index < num:
            front += letter
            continue
        back += letter
    return back + front

print(rotateStrByNum("Hello World", 8))
