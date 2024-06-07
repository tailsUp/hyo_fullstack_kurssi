import useRepositories from '../data/useRepositories';


const GetRepositories = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
  return repositoryNodes;
};


export default GetRepositories;
