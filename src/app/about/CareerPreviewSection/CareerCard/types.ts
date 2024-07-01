/**
 * Represents the props for a career card component.
 */
export interface CareerCardProps {
  /**
   * The URL of the company.
   */
  companyUrl: string;

  /**
   * The length of employment.
   */
  termOfEmployment: string;

  /**
   * The job title.
   */
  jobTitle: string;

  /**
   * The name of the company.
   */
  companyName: string;

  /**
   * The source of the default logo image.
   */
  defaultLogoImageSrc: string;

  /**
   * The source of the logo image in light mode (optional).
   */
  lightModeLogoImageSrc?: string;
}
