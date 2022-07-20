/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @return {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {name: name, age: age, ticketId: ticketId};
}
/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @return {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @return {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  let ticketMessage = 'unknown ticket id';
  if (tickets[ticketId] === null) {
    ticketMessage = 'not sold';
  } else if (tickets[ticketId] !== null && tickets[ticketId] !== undefined) {
    ticketMessage = `sold to ${tickets[ticketId]}`;
  }
  return ticketMessage;
}
/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @return {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let ticketMessage = 'invalid ticket !!!';
  if (tickets[ticketId] !== null && tickets[ticketId] !== undefined) {
    ticketMessage = `${tickets[ticketId]}`;
  }
  return ticketMessage;
}
/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @return {string | undefined} version
 */
export function gtcVersion(visitor) {
  if (visitor.gtc !== undefined &&
    visitor.gtc.version !== null && visitor.gtc.version !== undefined) {
    return visitor.gtc.version;
  }
}
