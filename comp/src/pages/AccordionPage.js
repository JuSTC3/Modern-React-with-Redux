import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Can i use React on a Project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: '2',
      label: 'Can i use Javascript on a Project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: '3',
      label: 'Can i use Css on a Project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    }
  ]
  return (
    <Accordion items={items} />
  );
}

export default AccordionPage;
