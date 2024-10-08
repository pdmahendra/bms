import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TicketCounter from "./TicketCounter";
import { formatCurrency } from "@/utils";

interface TicketTableOptionProps {
  currency: string;
  currentBasket: any;
  ticket: any;
  onTicketUpdate: (ticket: number) => void;
  pending: boolean;
  isSoldOut: boolean;
}
const TicketTableOption = ({
  currency,
  ticket,
  onTicketUpdate,
  currentBasket,
  pending,
  isSoldOut,
}: TicketTableOptionProps) => {
  const tickets = currentBasket
    ? currentBasket.find(
        (item: any) =>
          item.categoryType === ticket.categoryType &&
          item.categoryName === ticket.categoryName
      )?.noOfPersons
    : 0;

  return (
    <Accordion type="single" collapsible className="py-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full bg-white rounded-md px-4 my-2 md:m-2 shadow-md">
          <div className="flex w-full items-center justify-between">
            <p className="flex flex-col items-start ">
              <span className="text-lg">{ticket.categoryName}</span>
              <span className="text-gray-600 font-normal text-sm">
                {formatCurrency(ticket.categoryPricePerPerson, currency)}
                {/* {ticket.categoryType === "IND" ? "₹" : "$"} */}
                {/* {ticket.categoryPricePerPerson} */}
              </span>
            </p>

            {isSoldOut ? (
              <div>Sold out</div>
            ) : (
              <TicketCounter
                value={tickets}
                onValueChange={onTicketUpdate}
                pending={pending}
              />
            )}
          </div>
        </AccordionTrigger>
        {/* <AccordionContent className="ml-2 w-11/12"> */}
        {/*   <div className="flex flex-col gap-4"> */}
        {/*     <h3 className="text-xl font-medium">For first table</h3> */}
        {/**/}
        {/*     <div className="flex flex-col gap-4 py-10 px-14 bg-gray-200/25 rounded-2xl"> */}
        {/*       <p className="flex w-full items-center justify-between text-lg"> */}
        {/*         <span> */}
        {/*           No of <strong>Ladies</strong> */}
        {/*         </span> */}
        {/*         <TicketCounter className="mr-0" /> */}
        {/*       </p> */}
        {/**/}
        {/*       <p className="flex w-full items-center justify-between text-lg"> */}
        {/*         <span> */}
        {/*           No of <strong>Gentlemen</strong> */}
        {/*         </span> */}
        {/*         <TicketCounter className="mr-0" /> */}
        {/*       </p> */}
        {/**/}
        {/*       <span>Choose your table&apos; minimum spend</span> */}
        {/*       <Slider defaultValue={[33]} max={100} step={1} /> */}
        {/*       <p className="flex items-center justify-between text-lg font-medium"> */}
        {/*         <span>$500</span> */}
        {/*         <span>$1500</span> */}
        {/*       </p> */}
        {/**/}
        {/*       <p className="flex w-full items-center justify-center"> */}
        {/*         <ChevronLeft className="size-8 stroke-1" /> */}
        {/*         <ChevronRight className="size-8 stroke-1" /> */}
        {/*       </p> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </AccordionContent> */}
      </AccordionItem>
    </Accordion>
  );
};

export default TicketTableOption;
