import slugify from "slugify";

export const updateResort = (resort, allDestinations, featured) => {
  const updatedResort = resort;

  const destination = resort.destination;
  const slug = slugify(updatedResort.title, { lower: true });

  const updatedDestination = allDestinations.find(
    (correctDestination) => correctDestination.title === destination
  );

  updatedResort.destination = updatedDestination;
  updatedResort.featured = featured;
  updatedResort.slug = slug;

  return updatedResort;
};
