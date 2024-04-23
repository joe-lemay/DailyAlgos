def groupAnagrams(strs):
    solution = []
    for i in range(0,len(strs)-1):
        solution.append([strs[i]])
        temp = strs[i] = ''.join(sorted(strs[i]))
        for j in range(i+1, len(strs)-1):
            temp2 = ''.join(sorted(strs[j]))
            if temp == temp2:
                solution[i].append(strs[j])
                del strs[j]
    return solution

strings = ["eat","tea","tan","ate","nat","bat"]

print(groupAnagrams(strings))


