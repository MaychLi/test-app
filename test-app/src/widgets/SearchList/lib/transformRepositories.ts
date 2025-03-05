import {Repository} from "@/entities/RepositoryCard";

export const transformRepositories = (data: any) => {
  const repositories: Repository[] = data.map((repository: any) => {
    return {
      id: repository.id,
      logoUrl: repository.owner.avatar_url,
      title: repository.full_name,
      description: repository.description,
      starsAmount: repository.stargazers_count,
      forksAmount: repository.forks_count,
      linkUrl: repository.html_url
    };
  });

  return repositories;
};
