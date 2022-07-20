import { createVisitor, revokeTicket, gtcVersion, ticketStatus, simpleTicketStatus } from "../src/amusementPark";

describe("Create a new visitor", () => {
    test("correctly assembles the visitor object", () => {
        const name ="James Bond";
        const age=56;
        const ticketId="ALB77EFC";
        expect(createVisitor(name, age, ticketId)).toEqual({ name: "James Bond", age: 56, ticketId: "ALB77EFC" });
    });
});

describe("Revoke the ticket", () => {
    test("sets the ticketId to null", () => {
        const visitor = { name: "Jane Bond", age: 23, ticketId: "ALB77EFC" }
        expect(revokeTicket(visitor)).toEqual({ name: "Jane Bond", age: 23, ticketId: null });
    });
    test("does nothing if the ticket was already revoked", () => {
        const visitor = { name: "John Smith", age: 28, ticketId: null }
        const revokedTicketId = revokeTicket(visitor);
        expect(revokeTicket(revokedTicketId)).toEqual(visitor);
    });    
});

describe("Determine the ticket status", ()=> {
    const tickets = {
        QINS6S94: 'Hong Hsu',
        V42NWRMQ: null,
        A56MTX8E: null,
        H31SAW5Q: 'Lior MacNeil',
        M9ZTXP89: 'Kamani Ybarra',
        YEVHK4MC: null
      }
   test("correctly identifies that a ticket is not in the tracking object", () => {
    const ticketId = 'Y4KXZOYM';
      expect(ticketStatus(tickets, ticketId)).toBe('unknown ticket id')
   })
   test("correctly identifies that a ticket is not sold", () => {
    const ticketId = 'V42NWRMQ';
      expect(ticketStatus(tickets, ticketId)).toBe('not sold')
   })
   test("correctly identifies that a ticket is not sold", () => {
    const ticketId = 'QINS6S94';
      expect(ticketStatus(tickets, ticketId)).toBe('sold to Hong Hsu')
   })
});

describe("Improve the ticket status response", ()=> {
    const tickets = {
        QINS6S94: 'Hong Hsu',
        V42NWRMQ: null,
        A56MTX8E: null,
        H31SAW5Q: 'Lior MacNeil',
        M9ZTXP89: 'Kamani Ybarra',
        YEVHK4MC: null
      }
   test("identifies ticket that are not in the tracking object as invalid", () => {
    const ticketId = 'Y4KXZOYM';
      expect(simpleTicketStatus(tickets, ticketId)).toBe('invalid ticket !!!')
   })
   test("identifies tickets that are not sold as invalid", () => {
    const ticketId = 'V42NWRMQ';
      expect(simpleTicketStatus(tickets, ticketId)).toBe('invalid ticket !!!')
   })
   test("returns the visitor name for tickets that were sold", () => {
    const ticketId = 'QINS6S94';
      expect(simpleTicketStatus(tickets, ticketId)).toBe('Hong Hsu')
   });
   test("tickets with strange name values are valid nevertheless", () => {
    const newTickets = {
        B7627X32: '',
        XF1X6S2W: 0,
        KJJIFFO0: false,
      };
    const ticketId = 'B7627X32';
      expect(simpleTicketStatus(newTickets, ticketId)).not.toEqual('invalid ticket !!!')
   });
   test("tickets with strange name values are valid nevertheless", () => {
    const newTickets = {
        B7627X32: '',
        XF1X6S2W: 0,
        KJJIFFO0: false,
      };
    const ticketId = 'XF1X6S2W';
      expect(simpleTicketStatus(newTickets, ticketId)).not.toEqual('invalid ticket !!!')
   });
   test("tickets with strange name values are valid nevertheless", () => {
    const newTickets = {
        B7627X32: '',
        XF1X6S2W: 0,
        KJJIFFO0: false,
      };
    const ticketId = 'KJJIFFO0';
      expect(simpleTicketStatus(newTickets, ticketId)).not.toEqual('invalid ticket !!!')
   });


});

describe("Determine the version of terms and conditions", () => {
    test("determines the GTC version if it is present", () => {
        const visitor1 = {
            name: 'John Smith',
            age: 29,
            ticketId: '8DGM3163',
            gtc: {
              signed: true,
              version: '4.2',
            },
          };
      const visitor2 = {
            name: 'Larry Larry',
            age: 24,
            ticketId: 'BMYPNZGT',
            gtc: {
              signed: true,
              version: '1.2',
            },
          };
      expect(gtcVersion(visitor1)).toBe('4.2');
      expect(gtcVersion(visitor2)).toBe('1.2');
    
    });
    test("returns nothing if there is no gtc object", () => {
        const visitor1 = {
            name: 'John Smith',
            age: 29,
            ticketId: '8DGM3163',
            
          };
      const visitor2 = {
            name: 'Larry Larry',
            age: 24,
            ticketId: 'BMYPNZGT',
          };
      expect(gtcVersion(visitor1)).toBeUndefined();
      expect(gtcVersion(visitor2)).toBeUndefined();
    
    });
    test("returns nothing if there is a gtc object but no gtc version", () => {
        const visitor1 = {
            name: 'Xuân Jahoda',
            age: 15,
            ticketId: 'NZGKELXC',
            gtc: {},
          };
      const visitor2 = {
            name: 'Micha Tót',
            age: 49,
            ticketId: '3BGCW1G9',
            gtc: {
              signed: false,
            },
          };
      expect(gtcVersion(visitor1)).toBeUndefined();
      expect(gtcVersion(visitor2)).toBeUndefined();
  
});

test("does not modify the visitor object", () => {
    const visitor = {
        name: 'Zohar Pekkanen',
        age: 28,
        ticketId: '8DGM3163',
      };
    const expectedTicket = {
        name: 'Zohar Pekkanen',
        age: 28,
        ticketId: '8DGM3163',
      };
    gtcVersion(visitor);
    expect(visitor).toEqual(expectedTicket);

});


});


