    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // function inventors1500() {
    //   inventors.filter((inventor) => {
    //     if(inventor.year >= 1500 && inventor.year <= 1599) {
    //       return true
    //     }
    //   })
    // }
    // console.log(inventors1500())

    // const inventors1500 = inventors.filter( (inventor) => {
    //   if (inventor.year >= 1500 && inventor.year <= 1599) {
    //     return true
    //   }
    // })

    // console.table(inventors1500)

    // const fifteen = inventors.filter(inventor => {
    //   if(inventor.year >= 1500 && inventor.year <= 1599) {
    //     return true
    //   }
    // })
    // console.table(fifteen)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    // function firstAndLast(arr) {
    //   return arr.map(name => 
    //   `${name.first} ${name.last}`)
    // }
    // console.table(firstAndLast(inventors))

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // function birthYearSort (array) {
    //   return array.sort((a,b) => a.year - b.year)
    // }
    // console.table(birthYearSort(inventors))

    // function deathYearSort (array) {
    //   return array.sort((a,b) => b.passed - a.passed)
    // }
    // console.table(deathYearSort(inventors))

    // Array.prototype.reduce()
    // // 4. How many years did all the inventors live all together?
    // function lifeSpanReduce(arr) {
    //   let ageCalc = arr.map(lifeSpan => lifeSpan.passed - lifeSpan.year)
    //   return ageCalc.reduce((a,b) => a + b, 0)
    // }
    // console.table(lifeSpanReduce(inventors))
    
    // function inventorLifeSpan(arr) {
    //   let ageCalc = arr.map(banana => {
    //     return banana.passed - banana.year
    //   })
    //     return ageCalc.reduce((a,b) => a + b, 0)
    // }
    // console.log(inventorLifeSpan(inventors))


    // const totalYears = inventors.reduce((total, inventor) => {
    //   return total + (inventor.passed - inventor.year);
    // }, 0);


    // 5. Sort the inventors by years lived

    function lifeSpanSort() {
      
      for(let i = 0; i < inventors.length; i++) {
        inventors[i].lifeSpan = inventors[i].passed - inventors[i].year
      }
      // return inventors.sort((a,b) => a + b)
    }

    lifeSpanSort()

    let sortedByLifeSpan = inventors.sort((a,b) => a.lifeSpan - b.lifeSpan)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
