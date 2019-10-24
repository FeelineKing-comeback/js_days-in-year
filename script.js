function daysInYear(year) {
  try {
    if(Number.isInteger(year)) {
    const dateChecker = (new Date(year,11,31) - new Date(year,0,0)) / 86400000;
    return dateChecker;
    }

    throw error;
  } catch (error) {
    return 'exception';
  }
}