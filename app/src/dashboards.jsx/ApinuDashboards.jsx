import { Card, CardBody, CardHeader, Image, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area } from 'recharts';

import Flags from '../components/Flags';
import { getRandomApinuNews, newsColumns } from '../news';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Card isBlurred className='p-1'>
        <CardHeader>
          <p className="">{label}</p>
        </CardHeader>
        <CardBody>
          {payload.map((item, index) => (
            <p key={index} className="">{`${item.name} : ${item.value}`}</p>
          ))}
        </CardBody>
      </Card>
    );
  }

  return null;
};

function ApinuDashboard1() {

  const data1 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  const initialData2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [data2, setData2] = useState(initialData2);

  const generateNewData = () => {
    return {
      name: `Page ${String.fromCharCode(65 + data2.length)}`,
      uv: Math.floor(Math.random() * 5000),
      pv: Math.floor(Math.random() * 5000),
      amt: Math.floor(Math.random() * 5000)
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setData2(currentData => {
        const newData = [...currentData];
        newData.shift();
        newData.push(generateNewData());
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 mx-4">

      <div className="p-3 h-80 rounded-lg bg-content1 bg-gradient-to-br from-primary from-10% via-secondary via-30% to-default to-90%">
        <h4 className='text-xl'>Население:</h4>
        <h2 className='text-6xl'>2 124 343</h2>
      </div>

      <div className="p-3 col-span-1 sm:col-span-1 order-first sm:order-first lg:order-none md:col-span-2 lg:col-span-2 h-80 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-gabriela mb-1">Апину</h1>
          <h3 className="text-2xl mb-4 font-marck">Не рухнувшее устоит</h3>
        </div>
        <div className=''>
          <div className="float-right mt-2 ml-4 w-1/4 aspect-[6/3]">
            <Flags kind={'apinu'} />
          </div>
          <div>
            <p className="mb-8 font-raleway text-lg hyphens-auto text-justify">
              Апину - город, выстроенный на берегах реки Пель.
              Слово "Апину", вероятнее всего, образовано следующим образом: а (где, с) + пими (дерево) + у (мн.ч).
              Так что название города означает что-то вроде "где-деревья" или "(места)-с-деревом".
              В силу древности названия оно и для самих жителей города звучит просто как сочетание звуков.
              Впрочем, в городе действительно много деревьев, и они играют важную роль в жизни горожан.
            </p>
          </div>
        </div>
      </div>

      <div
        className="p-3 h-80 bg-content1 rounded-lg"
        style={{
          backgroundImage: "url('/images/house.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >image 1
      </div>
      <div className="p-3 col-span-1 sm:col-span-1 md:col-span-2 h-80">
        <ResponsiveContainer>
          <AreaChart
            data={data2}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className='stroke-secondary' />
            <XAxis dataKey="name" stroke="#fffdfc" />
            <YAxis stroke="#fffdfc" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="uv" fill='#3ab0d6' stroke='#3ab0d6' />
            <Area type="monotone" dataKey="pv" fill='#35BE77' stroke='#35BE77' />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div
        className="p-3 h-80 bg-content1 rounded-lg"
        style={{
          backgroundImage: "url('/images/house.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >image 2</div>
      <div
        className="p-3 h-80 bg-content1 rounded-lg"
        style={{
          backgroundImage: "url('/images/house.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >image 3</div>
      <div className="p-3 h-80 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data1}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" className='stroke-secondary' /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            {/* <Legend /> */}
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="pv" stackId="a" className='fill-primary' />
            <Bar dataKey="amt" stackId="a" className='fill-secondary' />
            <Bar dataKey="uv" className='fill-default' />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div
        className="p-3 h-80 bg-content1 rounded-lg"
        style={{
          backgroundImage: "url('/images/house.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >image 4</div>
      <div
        className="p-3 col-span-1 sm:col-span-1 md:col-span-2 h-80 bg-content1 rounded-lg"
        style={{
          backgroundImage: "url('/images/house.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >image 5 big</div>
    </div>
  );
}

function ApinuNewsDashboard() {
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "source":
        return (
          <div className="">
            <p className='font-bold uppercase'>
              {cellValue}
            </p>
          </div>
        );
      case "content":
        return (
          <div className="flex flex-col">
            <p className="">
              {cellValue}
            </p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [selectedNews, setSelectedNews] = useState([]);
  const [loadingState, setLoadingState] = useState("idle");

  const selectRandomNews = () => {
    setLoadingState("loading");
    setSelectedNews([]);
    setTimeout(() => {
      setSelectedNews(getRandomApinuNews(12));
      setLoadingState("idle");
    }, 1000);
  };

  useEffect(() => {
    selectRandomNews();
    const interval = setInterval(selectRandomNews, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='apinu container mx-auto px-4 max-w-screen-md min-h-screen py-16'>
      <Table hideHeader className='h-full' removeWrapper aria-label="table with dynamic content">
        <TableHeader columns={newsColumns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody
          items={selectedNews ?? []}
          loadingContent={<Spinner color="primary" className='mt-16' />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={`${item.source}_${item.content}`}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
};

function ApinuDashboard2() {
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "source":
        return (
          <div className="">
            <p className='font-bold uppercase'>
              {cellValue}
            </p>
          </div>
        );
      case "content":
        return (
          <div className="flex flex-col">
            <p className="">
              {cellValue}
            </p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [selectedNews, setSelectedNews] = useState([]);
  const [loadingState, setLoadingState] = useState("idle");

  const selectRandomNews = () => {
    setLoadingState("loading");
    setSelectedNews([]);
    setTimeout(() => {
      setSelectedNews(getRandomApinuNews(5));
      setLoadingState("idle");
    }, 1000);
  };

  useEffect(() => {
    selectRandomNews();
    const interval = setInterval(selectRandomNews, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 mx-4">

      <div className="p-4 h-80 rounded-lg bg-content1">
        <h4 className='text-xl'>Население:</h4>
        <h2 className='text-6xl'>2 124 343</h2>
      </div>

      <div className="p-4 col-span-1 sm:col-span-1 order-first sm:order-first lg:order-none md:col-span-2 lg:col-span-2 h-80 bg-content1 rounded-lg overflow-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold font-raleway mb-1">Новости</h3>
        </div>
        <div className='apinu'>
          <Table hideHeader className='h-full' removeWrapper aria-label="table with dynamic content">
            <TableHeader columns={newsColumns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody
              items={selectedNews ?? []}
              loadingContent={<Spinner color="primary" className='mt-24' />}
              loadingState={loadingState}
            >
              {(item) => (
                <TableRow key={`${item.source}_${item.content}`}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div
        className="p-4 h-80 bg-content1 rounded-lg"
        style={{
          backgroundImage: "url('/images/house.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >image 1
      </div>


    </div>
  );
}

export { ApinuDashboard1, ApinuDashboard2, ApinuNewsDashboard };
