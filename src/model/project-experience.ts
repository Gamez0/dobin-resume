export default class ProjectExperience {
  private name: string;
  private description: string;
  private startDate: string;
  private endDate: string;
  private technologies: string[];

  constructor(
    name: string,
    description: string,
    startDate: string,
    endDate: string,
    technologies: string[],
  ) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.technologies = technologies;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public setStartDate(startDate: string): void {
    this.startDate = startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public setEndDate(endDate: string): void {
    this.endDate = endDate;
  }

  public getTechnologies(): string[] {
    return this.technologies;
  }

  public setTechnologies(technologies: string[]): void {
    this.technologies = technologies;
  }

  public addTechnology(technology: string): void {
    this.technologies.push(technology);
  }
}
