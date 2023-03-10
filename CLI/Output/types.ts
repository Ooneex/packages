import { IException } from "../deps.ts";
import { IStyle } from "../Style/mod.ts";

/**
 * Output interface
 * This interface allows you to print some messages in the terminal.
 */
export interface IOutput {
  /**
   * Write text.
   *
   * @param text - Text to write.
   * @param style - Style to apply.
   */
  write(text: string, style?: IStyle): this;

  /**
   * Write with new line.
   *
   * @param text - Text to write.
   * @param style - Style to apply.
   */
  writeln(text: string, style?: IStyle): this;

  /**
   * Write new line.
   *
   * @param count - Number of line.
   */
  newLine(count?: number): this;

  /**
   * Write space.
   *
   * @param count - Number of space.
   */
  space(count?: number): this;

  /**
   * Write success message.
   *
   * @param text - Message to print.
   * @param figure - Add check mark first.
   */
  success(text: string, figure?: boolean): this;

  /**
   * Write error message.
   *
   * @param text - Message to print.
   * @param figure - Add cross mark first.
   */
  error(text: string, figure: boolean): this;

  /**
   * Write error message.
   *
   * @param title - Title of message.
   * @param message - Error message.
   */
  formattedError(title: string, message: string): this;

  /**
   * Print threw exception
   * @param error
   */
  printException(error: IException): this;

  /**
   * Write info message.
   *
   * @param text - Message to print.
   * @param figure - Add info mark first.
   */
  info(text: string, figure: boolean): this;

  /**
   * Write warning message.
   *
   * @param text - Message to print.
   * @param figure - Add warning mark first.
   */
  warning(text: string, figure: boolean): this;
}
