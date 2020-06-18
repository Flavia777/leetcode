function reverseWords(s) {
  if (!s) return s;
  
  const arr = s.split(' ').filter(item => item);
  return arr.reverse().join(' ');
};