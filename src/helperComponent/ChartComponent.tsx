import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

interface DataItem {
    id: number
    Label: string
    RandomNumber: string
}

const yaxis: DataItem[] =
    // yaxis data...
    [
        {
            id: 1,
            Label: 'y1',
            RandomNumber: '551.2471046720009',
        },
        {
            id: 2,
            Label: 'y2',
            RandomNumber: '708.4396747954867',
        },
        {
            id: 3,
            Label: 'y3',
            RandomNumber: '291.6138341740314',
        },
        {
            id: 4,
            Label: 'y4',
            RandomNumber: '511.31677759246537',
        },
        {
            id: 5,
            Label: 'y5',
            RandomNumber: '893.0540073933071',
        },
        {
            id: 6,
            Label: 'y6',
            RandomNumber: '896.3967958445046',
        },
        {
            id: 7,
            Label: 'y7',
            RandomNumber: '126.45972515337242',
        },
        {
            id: 8,
            Label: 'y8',
            RandomNumber: '208.03563526004856',
        },
        {
            id: 9,
            Label: 'y9',
            RandomNumber: '52.41573609752905',
        },
        {
            id: 10,
            Label: 'y10',
            RandomNumber: '441.36903380698584',
        },
        {
            id: 11,
            Label: 'y11',
            RandomNumber: '30.84633466768839',
        },
        {
            id: 12,
            Label: 'y12',
            RandomNumber: '457.37639117031637',
        },
        {
            id: 13,
            Label: 'y13',
            RandomNumber: '649.494903567146',
        },
        {
            id: 14,
            Label: 'y14',
            RandomNumber: '279.2087953653273',
        },
        {
            id: 15,
            Label: 'y15',
            RandomNumber: '676.5786470781511',
        },
        {
            id: 16,
            Label: 'y16',
            RandomNumber: '591.2719545989345',
        },
        {
            id: 17,
            Label: 'y17',
            RandomNumber: '24.9579004947882',
        },
        {
            id: 18,
            Label: 'y18',
            RandomNumber: '559.2952339028911',
        },
        {
            id: 19,
            Label: 'y19',
            RandomNumber: '259.99319446055796',
        },
        {
            id: 20,
            Label: 'y20',
            RandomNumber: '415.6860958130596',
        },
        {
            id: 21,
            Label: 'y21',
            RandomNumber: '284.24155668954745',
        },
        {
            id: 22,
            Label: 'y22',
            RandomNumber: '693.4447803946833',
        },
        {
            id: 23,
            Label: 'y23',
            RandomNumber: '441.01326395306876',
        },
        {
            id: 24,
            Label: 'y24',
            RandomNumber: '157.71087073648832',
        },
        {
            id: 25,
            Label: 'y25',
            RandomNumber: '545.1043690138129',
        },
        {
            id: 26,
            Label: 'y26',
            RandomNumber: '780.5344497468557',
        },
        {
            id: 27,
            Label: 'y27',
            RandomNumber: '307.0571688438036',
        },
        {
            id: 28,
            Label: 'y28',
            RandomNumber: '222.73592604824924',
        },
        {
            id: 29,
            Label: 'y29',
            RandomNumber: '388.5832862980931',
        },
        {
            id: 30,
            Label: 'y30',
            RandomNumber: '936.44726621057',
        },
        {
            id: 31,
            Label: 'y31',
            RandomNumber: '976.0194270504609',
        },
        {
            id: 32,
            Label: 'y32',
            RandomNumber: '672.7112922369008',
        },
        {
            id: 33,
            Label: 'y33',
            RandomNumber: '902.9312744298596',
        },
        {
            id: 34,
            Label: 'y34',
            RandomNumber: '845.9051204218861',
        },
        {
            id: 35,
            Label: 'y35',
            RandomNumber: '378.61604728756026',
        },
        {
            id: 36,
            Label: 'y36',
            RandomNumber: '93.12479186285252',
        },
        {
            id: 37,
            Label: 'y37',
            RandomNumber: '653.7574916210126',
        },
        {
            id: 38,
            Label: 'y38',
            RandomNumber: '558.2829216260625',
        },
        {
            id: 39,
            Label: 'y39',
            RandomNumber: '362.2031982995155',
        },
        {
            id: 40,
            Label: 'y40',
            RandomNumber: '225.8294503349921',
        },
        {
            id: 41,
            Label: 'y41',
            RandomNumber: '407.1133964598724',
        },
        {
            id: 42,
            Label: 'y42',
            RandomNumber: '469.4713084504699',
        },
        {
            id: 43,
            Label: 'y43',
            RandomNumber: '269.9663426728102',
        },
        {
            id: 44,
            Label: 'y44',
            RandomNumber: '292.50098145120717',
        },
        {
            id: 45,
            Label: 'y45',
            RandomNumber: '458.22871292365494',
        },
        {
            id: 46,
            Label: 'y46',
            RandomNumber: '860.6733790339796',
        },
        {
            id: 47,
            Label: 'y47',
            RandomNumber: '586.6666515633536',
        },
        {
            id: 48,
            Label: 'y48',
            RandomNumber: '284.2043745697776',
        },
        {
            id: 49,
            Label: 'y49',
            RandomNumber: '278.6995291169777',
        },
        {
            id: 50,
            Label: 'y50',
            RandomNumber: '455.1674534464248',
        },
    ]

const xaxis: DataItem[] = [
    // xaxis data...
    {
        id: 2,
        Label: 'x2',
        RandomNumber: '26.90030559606344',
    },
    {
        id: 3,
        Label: 'x3',
        RandomNumber: '550.1128154008304',
    },
    {
        id: 4,
        Label: 'x4',
        RandomNumber: '435.8870702256586',
    },
    {
        id: 5,
        Label: 'x5',
        RandomNumber: '420.9474342854015',
    },
    {
        id: 6,
        Label: 'x6',
        RandomNumber: '331.00448618287027',
    },
    {
        id: 7,
        Label: 'x7',
        RandomNumber: '205.44398540380465',
    },
    {
        id: 8,
        Label: 'x8',
        RandomNumber: '619.651695384313',
    },
    {
        id: 9,
        Label: 'x9',
        RandomNumber: '300.35501900084864',
    },
    {
        id: 10,
        Label: 'x10',
        RandomNumber: '267.56044782776377',
    },
    {
        id: 11,
        Label: 'x11',
        RandomNumber: '621.5126989365256',
    },
    {
        id: 12,
        Label: 'x12',
        RandomNumber: '529.612952182762',
    },
    {
        id: 13,
        Label: 'x13',
        RandomNumber: '135.44536539958864',
    },
    {
        id: 14,
        Label: 'x14',
        RandomNumber: '514.0645431444807',
    },
    {
        id: 15,
        Label: 'x15',
        RandomNumber: '185.25542578126837',
    },
    {
        id: 16,
        Label: 'x16',
        RandomNumber: '785.5498126688568',
    },
    {
        id: 17,
        Label: 'x17',
        RandomNumber: '854.1213173468493',
    },
    {
        id: 18,
        Label: 'x18',
        RandomNumber: '494.7426005445459',
    },
    {
        id: 19,
        Label: 'x19',
        RandomNumber: '846.7149238721105',
    },
    {
        id: 20,
        Label: 'x20',
        RandomNumber: '80.56583153205193',
    },
    {
        id: 21,
        Label: 'x21',
        RandomNumber: '505.74084403158224',
    },
    {
        id: 22,
        Label: 'x22',
        RandomNumber: '66.22121788249123',
    },
    {
        id: 23,
        Label: 'x23',
        RandomNumber: '428.69420526979206',
    },
    {
        id: 24,
        Label: 'x24',
        RandomNumber: '97.43438474495194',
    },
    {
        id: 25,
        Label: 'x25',
        RandomNumber: '128.03281172957617',
    },
    {
        id: 26,
        Label: 'x26',
        RandomNumber: '597.1485636696171',
    },
    {
        id: 27,
        Label: 'x27',
        RandomNumber: '226.78598860363164',
    },
    {
        id: 28,
        Label: 'x28',
        RandomNumber: '107.83873862567299',
    },
    {
        id: 29,
        Label: 'x29',
        RandomNumber: '221.08590086348914',
    },
    {
        id: 30,
        Label: 'x30',
        RandomNumber: '350.476458718296',
    },
    {
        id: 31,
        Label: 'x31',
        RandomNumber: '468.31969709771795',
    },
    {
        id: 32,
        Label: 'x32',
        RandomNumber: '202.54148303870036',
    },
    {
        id: 33,
        Label: 'x33',
        RandomNumber: '640.7663184896999',
    },
    {
        id: 34,
        Label: 'x34',
        RandomNumber: '483.5867657161999',
    },
    {
        id: 35,
        Label: 'x35',
        RandomNumber: '505.7314832985306',
    },
    {
        id: 36,
        Label: 'x36',
        RandomNumber: '387.5057584674407',
    },
    {
        id: 37,
        Label: 'x37',
        RandomNumber: '793.8438169871355',
    },
    {
        id: 38,
        Label: 'x38',
        RandomNumber: '580.4241746989288',
    },
    {
        id: 39,
        Label: 'x39',
        RandomNumber: '163.13629990381156',
    },
    {
        id: 40,
        Label: 'x40',
        RandomNumber: '701.0515942605491',
    },
    {
        id: 41,
        Label: 'x41',
        RandomNumber: '964.5865290091659',
    },
    {
        id: 42,
        Label: 'x42',
        RandomNumber: '500.5083528090465',
    },
    {
        id: 43,
        Label: 'x43',
        RandomNumber: '889.6305438821988',
    },
    {
        id: 44,
        Label: 'x44',
        RandomNumber: '342.27203901843853',
    },
    {
        id: 45,
        Label: 'x45',
        RandomNumber: '567.5769835000816',
    },
    {
        id: 46,
        Label: 'x46',
        RandomNumber: '428.1184173328139',
    },
    {
        id: 47,
        Label: 'x47',
        RandomNumber: '437.31051576377223',
    },
    {
        id: 48,
        Label: 'x48',
        RandomNumber: '776.7826258121032',
    },
    {
        id: 49,
        Label: 'x49',
        RandomNumber: '536.0685693241587',
    },
    {
        id: 50,
        Label: 'x50',
        RandomNumber: '953.7884847179217',
    },
]

const ChartComponent: React.FC = () => {
    const [chartData, setChartData] = useState<any>({})

    useEffect(() => {
        // Combine yaxis and xaxis data into a single array
        const combinedData = yaxis.map((yItem, index) => ({
            Label: yItem.Label,
            RandomNumberY: parseFloat(yItem.RandomNumber),
            RandomNumberX: parseFloat(xaxis[index].RandomNumber),
        }))

        // Prepare data for Chart.js
        const chartLabels = combinedData.map((item) => item.Label)
        const randomNumbersY = combinedData.map((item) => item.RandomNumberY)
        const randomNumbersX = combinedData.map((item) => item.RandomNumberX)

        setChartData({
            labels: chartLabels,
            datasets: [
                {
                    label: 'Y Axis Random Numbers',
                    data: randomNumbersY,
                    borderColor: 'rgba(255, 99, 132, 0.6)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                },
                {
                    label: 'X Axis Random Numbers',
                    data: randomNumbersX,
                    borderColor: 'rgba(54, 162, 235, 0.6)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                },
            ],
        })
    }, [])

    return (
        <div>
            <h2>Chart Example</h2>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    title: {
                        text: 'Combined Y and X Axis Random Numbers',
                        display: true,
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
}

export default ChartComponent
