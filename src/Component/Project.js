import React from "react";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';

function Project() {
  return (
    <Container>
    <h1>Projects</h1>
    <p>This page contains brief descriptions of several HEECMA-related projects. Please follow the links below for more details.</p>
    <ListGroup variant="flush">
      <ListGroup.Item><h3>Optimized Cuckoo Filter:</h3> Membership testing has many networking applications like distributed caching, peer-to-peer networks, or resource routing, to name a few. Several studies have reported the advantages of using membership testing in Software Defined Networking, and Bloom Filters have been widely adopted for that purpose. Cuckoo Filters is a recently proposed alternative to Bloom that outperforms them in terms of speed and memory efficiency, with some drawbacks. We propose an Optimized Cuckoo Filter (OCF) design that limits some of the Cuckoo Filter drawbacks and gives a better-amortized search time, with fewer false positives</ListGroup.Item>
      <ListGroup.Item><h3>COSE:</h3> The cost of cloud usage and performance of a serverless application is affected by various configurable parameters of serverless functions such as memory, CPU, and location. To address the challenge of configuring these parameters optimally, we built COSE. It is a framework that uses Bayesian Optimization to find the optimal configuration for serverless functions. It uses statistical learning techniques to intelligently collect samples and predict the cost and execution time of a serverless function across unseen configuration values. We evaluated COSE not only on a commercial cloud provider, where we successfully found optimal/near-optimal configurations in as few as five samples but also over a wide range of simulated distributed cloud environments that confirm the efficacy of our approach. </ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
    </Container>
  );
}

export default Project;