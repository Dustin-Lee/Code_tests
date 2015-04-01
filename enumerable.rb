module Enumerable
	def max
		puts 'in max'
		first = true
		sofar = nil
		each {|x|
			puts "f = #{first}"
			if first
				puts "f2 = #{first}"
				first = false
				sofar = x
			elsif x > sofar
				puts "f = #{first}"
				sofar = x
			end
		}
		puts "first = #{first}"
		if first
			puts 'zero'
			raise "empty collection"
		else
			puts 'in here'
			sofar
		end
	end
end

y = [1,2,3].max
#y = [].max
puts y