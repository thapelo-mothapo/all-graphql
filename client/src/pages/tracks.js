import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
import { gql, useQuery } from "@apollo/client";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query Tracks {
    tracks {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);
  if (loading) return "Loading...";

  if (error) return `Error ${error}`;

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracks?.map((track, index) => (
          <TrackCard key={index} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
