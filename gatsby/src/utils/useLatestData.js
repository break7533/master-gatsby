import { useEffect, useState } from 'react';

export default function useLatestData() {
  // Hot Slices
  const [hotSlices, setHotSlices] = useState();
  // Slicemasters
  const [slicemasters, setSlicemasters] = useState();

  // Use a side effect to fetch the data from the graphql endpoint
  useEffect(() => {
    // When the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          StoreSettings(id: "downtown") {
            name
            slicemasters {
              name
            }
            hotSlices {
              name
            }
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: check for errors
        // Set the data to state
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemasters);
      });
  }, []);

  return {
    hotSlices,
    slicemasters,
  };
}
