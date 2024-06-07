//import RepositoryFlexBox from "../../components/RepositoryFlexBox";
import ShowRepositories from '../../components/ShowRepositories/ShowRepositories';
import { render, screen } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = [
        {
          id: 'jaredpalmer.formik',
          fullName: 'jaredpalmer/formik',
          description: 'Build forms in React, without the tears',
          language: 'TypeScript',
          forksCount: 1619,
          stargazersCount: 21856,
          ratingAverage: 88,
          reviewCount: 3,
          ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
        },
        {
          id: 'async-library.react-async',
          fullName: 'async-library/react-async',
          description: 'Flexible promise-based React data loader',
          language: 'JavaScript',
          forksCount: 69,
          stargazersCount: 1760,
          ratingAverage: 72,
          reviewCount: 3,
          ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
        },
      ];

      // Add your test code here

      //Implement a test that ensures that the RepositoryListContainer component renders repository's:
      //name, description, language, forks count, stargazers count, rating average, and review count correctly.

      render(<ShowRepositories  repositories={repositories}/>);
      //render(<RepositoryFlexBox data={repositories}/>);

      /*const stars   = screen.getAllByTestId('Stars');
      const forks   = screen.getAllByTestId('Forks');
      const reviews =  screen.getAllByTestId('Reviews');
      const rating  =  screen.getAllByTestId('Rating');
      const name = screen.getAllByTestId('nameTest');
      const description = screen.getAllByTestId('descriptionTest');
      const language = screen.getAllByTestId('languageTest');*/

      //const [firstStar, secondStar] = repositoryItems;

      screen.getAllByTestId('Stars');
      screen.getAllByTestId('Forks');
      screen.getAllByTestId('Reviews');
      screen.getAllByTestId('Rating');
      screen.getAllByTestId('nameTest');
      screen.getAllByTestId('descriptionTest');
      screen.getAllByTestId('languageTest');

    });
  });
});