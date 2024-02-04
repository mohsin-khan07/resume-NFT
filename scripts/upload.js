import { createHelia } from "helia";
// import { metadata } from "../ipfs/metadata";

async function run() {
  const helia = await createHelia();

  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "Mohsin's Resume",
      image: "QmfWwKfkCEdpUSjShbwCkkRqsBx3qGYsm3abVy1F5ixhKX",
      description: "Innovator • Versatile • Solver",
      external_url: "https://themohsinkhan.com/",
      attributes: [
        {
          trait_type: "Solidity",
          value: "Advance",
        },
        {
          trait_type: "JavaScript",
          value: "Intermediate",
        },
        {
          trait_type: "Blockchain",
          value: "Intermediate",
        },
        {
          trait_type: "Smart Contracts",
          value: "Advance",
        },
        {
          trait_type: "Web Development",
          value: "Intermediate",
        },
        {
          trait_type: "React.js",
          value: "Advance",
        },
      ],
    }),
  };

  const result = await helia.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
