export const validateDestination = (destinations, destinationToValidate) => {
  if (destinationToValidate) {
    return destinations.find(
      (destination) => destination.title === destinationToValidate.title
    );
  }

  return false;
};
