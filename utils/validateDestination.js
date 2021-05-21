export const validateDestination = (destinations, destinationToValidate) => {
  // console.log("destinationToValidate", destinationToValidate);
  if (destinationToValidate) {
    return destinations.find(
      (destination) => destination.title === destinationToValidate.title
    );
  }

  return false;
};
