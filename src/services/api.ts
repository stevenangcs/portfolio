export const fetchAbout = async () => {
    const response = await fetch('/api/about');
    if (!response.ok) {
      throw new Error('Failed to fetch about data');
    }
    return response.json();
  };
  
  export const fetchProjects = async () => {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects data');
    }
    return response.json();
  };