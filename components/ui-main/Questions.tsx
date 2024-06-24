import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AiOutlineQuestionCircle } from "react-icons/ai";

const Questions = () => {
  return (
    <div className="flex flex-col flex-1 w-full gap-4">
      <h1 className="text-[2rem] font-[900] tracking-tighter text-blue-main flex items-center gap-2"><AiOutlineQuestionCircle /> Using Sniper</h1>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">Purpose</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis provident totam rem ullam hic pariatur quasi consectetur ipsa mollitia distinction.

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Sniping Courses</AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores consequatur voluptates neque. Mollitia neque repellat voluptatum. Corporis, accusantium eos?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Managing Snipes</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque omnis doloribus dolore esse odio amet impedit, facere aperiam animi autem.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default Questions;
