/*
https://www.pramp.com/challenge/Q5G1jZ1OWdtZ3GbAGpNE

Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.
*/
function validateIP(ip) {
  /**
	@param ip: string
	@return: boolean
	*/
  if (ip.match(/\./g).length !== 3) {
    return false;
  } else {
    let ipArray = ip.split('.');
    if (ipArray.length !== 4) {
      return false;
    } else {
      for (let i = 0; i < ipArray.length; i++) {
        let curr = ipArray[i];
        if (curr === '' || curr.match(/[0-9]/g).length !== curr.length) {
          return false;
        }
        if (Number(curr) < 0 || Number(curr) > 255) {
          return false;
        }
      }
    }
  }
  return true;
}
