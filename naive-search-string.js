function naiveSearchString ( long, short  ) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++ ) {
      if ( short[ j ] !== long[ i + j ] ) break  
      if ( j === short.lenght -1  ) count++
    }
  }
  return count; 
}

naiveSearchString('lolohelolo helo bbaloloby hallolo', 'lo')

// 9 
