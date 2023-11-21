function truncateString(inputStr: string, maxLength: number) {
  const str = inputStr ?? "";
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}

export default truncateString;
