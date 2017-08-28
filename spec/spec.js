describe("Functions", function() {
	
	//var answers = require('../../lib/jasmine_examples/Answers');

	beforeEach(function() {
		
	});

	/* returns larger side of a rectangle */
	it( 'returns larger value', function() {
		var result1 = RectangleLargerSide(10, 12);
		var result2 = RectangleLargerSide(12, 12);
		var result3 = RectangleLargerSide(14, 12);
		expect( result1 ).toEqual(12);
		expect( result2 ).toEqual(12);
		expect( result3 ).toEqual(14);
	});

	/* returns largest side of a triangle */
	it( 'returns largest value', function() {
		var result1 = TriangleLargestSide(10, 12, 13);
		var result2 = TriangleLargestSide(12, 12, 12);
		var result3 = TriangleLargestSide(5, 4, 3);
		var result4 = TriangleLargestSide(13, 13, 14);
		expect( result1 ).toEqual(13);
		expect( result2 ).toEqual(12);
		expect( result3 ).toEqual(5);
		expect( result4 ).toEqual(14);
	});

	/* checkIfRectangleIsSquare */
	it( 'check if width and height are equal', function() {
		var result1 = checkIfRectangleIsSquare(10, 12);
		var result2 = checkIfRectangleIsSquare(12, 12);
		expect( result1 ).toBeFalsy();
		expect( result2 ).toBeTruthy();
	});

	/* checkIfHrefStartsWithHash */
	it('check if href starts with hash', function() {
		var result1 = checkIfHrefStartsWithHash( "#coucou" );
		var result2 = checkIfHrefStartsWithHash( "http://myexample.com" );
		var result3 = checkIfHrefStartsWithHash( "http://myexample.com#coucou" );
		expect( result1 ).toBeTruthy();
		expect( result2 ).toBeFalsy();
		expect( result3 ).toBeFalsy();
	});

	/* checkcheckIfFileIsPNGFile */
	it( 'check if file name ends with .png', function(){
		var result1 = checkIfFileIsPNGFile( "landscape.png" );
		var result2 = checkIfFileIsPNGFile( "png.jpg" );
		var result3 = checkIfFileIsPNGFile( "landscape.PNG" );
		expect( result1 ).toBeTruthy();
		expect( result2 ).toBeFalsy();
		expect( result3 ).toBeTruthy();
	});

	/* selectElementsStartingWithA */
	it('selects elements starting with a or A', function() {
		var result1 = selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
		var result2 = selectElementsStartingWithA(['bananas', 'pears']);
		var result3 = selectElementsStartingWithA(['bananas', 'Apples', 'pears', 'avocados']);
		
		expect(result1).toEqual(['apples', 'avocados']);
		expect(result2).toEqual([]);
		expect(result3).toEqual(['Apples', 'avocados']);
	});

	/* allElementsExceptFirstThree */
	it('takes all elements except the first 3', function() {
		var result1 = allElementsExceptFirstThree([1, 2, 3, 4, 5, 6, 7, 8]);
		var result2 = allElementsExceptFirstThree([1, 2, 3]);
		var result3 = allElementsExceptFirstThree([1, 2]);

		expect(result1).toEqual([4, 5, 6, 7, 8]);
		expect(result2).toEqual([]);
		expect(result3).toEqual([]);
	});

	/* addElementToBeginning */
	it('adds an element to the beginning of an array', function() {
		var result1 = addElementToBeginning([2, 3, 4, 5], 1);
		var result2 = addElementToBeginning([], 1);
		expect(result1).toEqual([1, 2, 3, 4, 5]);
		expect(result2).toEqual([1]);
	});

	/* removeElementAtGivenPosition */
	it('removes an element at a given position in an array and returns the array', function() {
		expect( removeElementAtGivenPosition(['a', 1, 'b'], 0) ).toEqual([1, 'b']);
		expect( removeElementAtGivenPosition(['a', 1, 'b'], 10) ).toEqual(['a', 1, 'b']);
	});

	/* removeLastElement */
	it('removes the last element in an arr', function() {
		expect( removeLastElement(['a', 1, 'b']) ).toEqual(['a', 1]);
		expect( removeLastElement(['a'])).toEqual([]);
		expect( removeLastElement([])).toEqual([]);
	});

	/* makeNegative */
	it('makes numbers negative', function() {
		
		var result1 = makeNegative(5);
		var result2 = makeNegative(-5);
		var result3 = makeNegative(0);

		expect(result1).toEqual(-5);
		expect(result2).toEqual(-5);
		expect(result3).toEqual(0);
	});
  
	/* sumNumbers */
	it('sums up the numbers in an array', function() {
		var result1 = sumNumbers([1, 3, 5, 6, 2, 8]);
		var result2 = sumNumbers([]);
		
		expect(result1).toEqual(1 + 3 + 5 + 6 +2 + 8);
		expect(result2).toEqual(0);
	});

	/* calculateAverage */
	it('calculates the average of an array of numbers', function() {
		var result1 = calculateAverage([10, 15, 25]);
		var result2 = calculateAverage([10]);
		expect(result1).toEqual((10 + 15 + 25) / 3);
		expect(result2).toEqual(10 / 1);
	});

	/* longestWord */
	it('returns the longest word in an array', function() {
		var result = longestWord(['A', 'Lannister', 'always', 'pays', 'his', 'debts']);
		var result1 = longestWord(['A', 'render', 'always', 'pays', 'his', 'debts']);
		expect(result).toEqual('Lannister');
		expect(result1).toEqual('render');
		expect(longestWord([])).toEqual('');
	});


	it('gets all letters in an array of words', function() {
		// returns sorted
		var result = getAllLetters(['cat', 'dog', 'fish']);
		expect(result).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
		// deals with repeated letters
		var result2 = getAllLetters(['cat', 'dog', 'fish', 'cat']);
		expect(result2).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
	});

	it('you should be able to reverse a string', function() {
		var inputStrings = [
			'abc',
			'i am a string of characters',
			'A man, a plan, a canal: Panama',
			''
		];
		var outputStrings = [
			'cba',
			'sretcarahc fo gnirts a ma i',
			'amanaP :lanac a ,nalp a ,nam A',
			''
		];

		inputStrings.forEach(function(str, index) {
			var result = reverseString(str);
			expect(result).toEqual(outputStrings[index]);
		});
	});

	it('check if a string is a palindrome', function() {
		var inputStrings = [
			'elle',
			'was it a cat I saw',
			'voici'
		];
		expect(checkIfPalindrome(inputStrings[0])).toBeTruthy();
		expect(checkIfPalindrome(inputStrings[1])).toBeFalsy();
		expect(checkIfPalindrome(inputStrings[2])).toBeFalsy();
	});

	it('checks if an integer is even', function() {
		expect(checkIfOdd(5)).toBeTruthy();
		expect(checkIfOdd(0)).toBeFalsy();
		expect(checkIfOdd(12408)).toBeFalsy();
	});

	it('checks if an integer is a multiple of 7', function() {
		expect(checkIfMultipleOfSeven(7*12)).toBeTruthy();
		expect(checkIfMultipleOfSeven(0)).toBeTruthy();
		expect(checkIfMultipleOfSeven(7*12+3)).toBeFalsy();
	});

	it('finds the factorial of a number', function() {
		expect(factorial(5)).toEqual(5 * 4 * 3 * 2 * 1);
		expect(factorial(0)).toEqual(1);
	});

	it('you should be able to return a binary string representation of an base10 integer', function() {
	  expect(convertIntegerToBinaryString(192)).toEqual('11000000');
	});

	it('you should be able to return the base10 representation of a binary string', function() {
	  expect(convertBinaryToBase10('11000000')).toEqual(192);
	});

	it('you should be able to return the hexadecimal representation of an base10 integer', function() {
	  expect(convertIntegerToHexadecimal(10)).toMatch(/[aA]/);
	  expect(convertIntegerToHexadecimal(12)).toMatch(/[cC]/);
	  expect(convertIntegerToHexadecimal(199)).toMatch(/[cC]7/);
	});

	it('you should be able to return the hexadecimal representation of an base10 integer', function() {
	  expect(convertHexadecimalToInteger('a')).toEqual(10);
	  expect(convertHexadecimalToInteger('C')).toEqual(12);
	  expect(convertHexadecimalToInteger('c7')).toEqual(199);
	});


});
