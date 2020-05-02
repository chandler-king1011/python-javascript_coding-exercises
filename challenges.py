# Checking for anagrams

def anagram(sent1, sent2):
    sent1 = sent1.replace(" ", "").lower()
    sent2 = sent2.replace(" ", "").lower()
    return sorted(sent1) == sorted(sent2)

print(anagram("god", "dog"))


# Array pair sum

def pair_sum(arr, k):
    if len(arr) < 2:
        return print("Array is too small.")
    seen = set()
    output = set()

    for num in arr:
        target = k - num

        if target not in seen:
            seen.add(num)
        else:
            output.add((min(num, target), max(num, target)))

    print(", ".join(map(str, list(output))))    


pair_sum([1, 3, 2, 2], 4)


# Largest sum of an list  

def largest(lis):
  if len(lis) < 1:
      return "List is too small."
  largest_sum = 0
  largest_num = 0

  for num in lis:
    if num + largest_num > largest_sum:
        largest_sum = num + largest_num
    if num > largest_num:
        largest_num = num
  
  return largest_sum

print(largest([20, 1, 2, 3, 16]))


# Given a string of words return a string with the words in reverse

def reverse_string(str):
    str_list = str.split()
    reverse_list = []

    while (len(str_list) > 0):
        removed = str_list.pop()
        reverse_list.append(removed)
    return " ".join(reverse_list)   
    

print(reverse_string("Hi There"))


# Checking for rotational arrays

def rotation(list1, list2):
    if len(list1) != len(list2):
        return False

    key = list1[0]
    key_index = 0

    for index in range(len(list2)):
        if list2[index] == key:
            key_index = index

            break

    if key_index == 0: 
        return False
    
    for x in range(len(list1)):
        l2index = (key_index + x) % len(list1)

        if list1[x] != list2[l2index]:
            return False
    return True        

print(rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]))

# Checking two arrays and returning the common elements. 

def common_elements(list_one, list_two):
    common_list = []
    element_tracker = {}

    for item in list_one:
        element_tracker[item] = 1

    for i in list_two:
        if i in element_tracker.keys() and element_tracker[i] < 2:
           element_tracker[i] += 1
           common_list.append(i)

    return sorted(common_list)

print(common_elements([1, 2, 3, 4, 5], [2, 5, 6, 1, 8, 5]))