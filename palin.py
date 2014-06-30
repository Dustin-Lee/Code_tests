#!/usr/bin/python

s = 'abcba'
x = 'abc ba'
y = ''.join(reversed(x))
z = ''.join(reversed(s))
a = x[::-1]
print 'This is a: ' + a
print y
print z
if s == z:
	print z + 'hi'
if x == y:
	for i in range(0, len(x)):	#Testing
		if i != [a-z]:
			continue
		else:
			print i
#Working/Better method of palindrome searching
	#Still using variables above but not the modified ones
a = x.split()
print 'a after split: ', a
a = ''.join(a)
print 'a after join: ' + a
b = a[::-1]				#syntax is seq[start:end:step]
print b
if a==b:
	print 'a&b are palindromes'
#s = 'hello'
#s = s[::-2]	#Testing step nega 2 if forget how syntax works
#print s