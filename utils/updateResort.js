import slugify from "slugify";

export const updateResort = (resort, allDestinations) => {
  const updatedResort = resort;

  const destination = resort.destination;
  const slug = slugify(updatedResort.title, { lower: true });

  const updatedDestination = allDestinations.find(
    (correctDestination) => correctDestination.title === destination
  );

  updatedResort.destination = updatedDestination;
  updatedResort.slug = slug;

  return updatedResort;
};
