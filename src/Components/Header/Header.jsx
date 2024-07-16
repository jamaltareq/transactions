import React, { useState } from 'react'
import transactions from './../../Assits/transactions.png'
import amount from './../../Assits/payment.png'
import woman from '../../Assits/woman.png'
import graph from '../../Assits/graph.png'
import ChartComponent from '../../Bar/Bar'
export default function Header() {
    let [customer, setCustomer] = useState(
        [{
            "customers": [
                {
                    "id": 1,
                    "name": "ahmed ali"
                },
                {
                    "id": 2,
                    "name": "aya elsayed"
                },

                {
                    "id": 3,
                    "name": "mina adel"
                },
                {
                    "id": 4,
                    "name": "sarah reda"
                },
                {
                    "id": 5,
                    "name": "mohamed sayed"
                }
            ],
            "transactions": [
                {
                    "id": 1,
                    "customer_id": 1,
                    "date": "2022-01-01",
                    "amount": 1000
                },
                {
                    "id": 2,
                    "customer_id": 1,
                    "date": "2022-01-02",
                    "amount": 2000
                },
                {
                    "id": 3,
                    "customer_id": 2,
                    "date": "2022-01-01",
                    "amount": 550
                },
                {
                    "id": 4,
                    "customer_id": 3,
                    "date": "2022-01-01",
                    "amount": 500
                },
                {
                    "id": 5,

                    "customer_id": 2,
                    "date": "2022-01-02",
                    "amount": 1300
                },
                {
                    "id": 6,
                    "customer_id": 4,
                    "date": "2022-01-01",
                    "amount": 750
                },
                {
                    "id": 7,
                    "customer_id": 3,
                    "date": "2022-01-02",
                    "amount": 1250
                },
                {
                    "id": 8,
                    "customer_id": 5,
                    "date": "2022-01-01",
                    "amount": 2500
                },
                {
                    "id": 9,
                    "customer_id": 5,
                    "date": "2022-01-02",
                    "amount": 875
                },
                {
                    "id": 10,
                    "customer_id": 5,
                    "date": "2023-01-02",
                    "amount": 875
                },
            ]
        }]
    )
    let m = 0
    customer[0].transactions.map((item) => m += item.amount)
    let [ammount, setAmmount] = useState([])
    let [date, setDate] = useState([])
    let handleClick = (i) => {
        setAmmount(customer[0].transactions.filter((item) => item.customer_id == i).map((item) => item.amount))
        setDate(customer[0].transactions.filter((item) => item.customer_id == i).map((item) => item.date))
        console.log(ammount);
    }

    console.log();

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };


    const chartData = {
        labels: date,
        datasets: [
            {
                label: "Transaction Amount",
                data: ammount,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Transaction Chart',
            },
        },
    };

    const [value, setValue] = useState("");
    let [filter, setFilter] = useState(customer[0].customers)
    let filtertable = (e) => {
        setValue(e.target.value)
        console.log(customer[0].customers.filter((item) => item.name.includes(e.target.value)));

        setFilter(customer[0].customers.filter((item) => item.name.includes(e.target.value)))

    }
    return (
        <>
            <div className="header">
                <div className="container pt-3">

                    <h3>Welcome, to Customer Transactions</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="itemone rounded-4 px-3 py-1 d-flex justify-content-between align-items-center">
                                <div className="">
                                    <span>total transactions</span>
                                    <h2>{customer[0].transactions.length}<i className="ms-2 fa-solid fa-money-bill-transfer"></i></h2>
                                </div>
                                <div className="">
                                    <img src={transactions} width={150} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="itemtwo rounded-4 px-3 py-1 d-flex justify-content-between align-items-center">
                                <div className="">
                                    <span>total balance </span>
                                    <h2>{m} <span>EGP</span></h2>
                                </div>
                                <div className="">
                                    <img src={amount} width={150} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="itemthree rounded-4 px-3 py-1 d-flex justify-content-between align-items-center">
                                <div className="">
                                    <span>Total Customers</span>
                                    <h2>{customer[0].customers.length}<i className="ms-2 fa-solid fa-users"></i></h2>
                                </div>
                                <div className="">
                                    <img src={woman} width={150} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5 ">
                        <div className="col-md-4 rounded-4">
                            <ChartComponent data={chartData} options={chartOptions} />
                        </div>
                        <div className="col-md-8">
                            <div className="table-container p-3 rounded-4 h100 overflow-auto  bg-white">
                                <div className="mb-2 d-flex align-items-center justify-content-between w-100 ">
                                    <span className="fw-bold">Transactions history</span>
                                    <input className="input-transparent" value={value} onChange={filtertable} type="text" placeholder="Search transaction and amount...." />
                                </div>
                                <table id="mytable" className="table align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr className="header-row">
                                            <th>ID #</th>
                                            <th>customer Name</th>
                                            <th>Status</th>
                                            <th>date</th>
                                            <th>amount</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {filter.map((i, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="">
                                                                <p className="fw-bold mb-1">{index + 1}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span><a
                                                            className="btn avatar-button rounded-circle overflow-hidden p-0 m-0 d-inline-flex"
                                                        ><span
                                                            data-v-0a07f886="" className="avatar-span border-0 d-inline-flex align-items-center justify-content-center text-white text-uppercase text-nowrap font-weight-normal"></span></a>
                                                        </span>
                                                        {i.name}
                                                    </td>

                                                    <td>
                                                        <span className="badge badge-primary rounded-pill d-inline"
                                                        > Done</span
                                                        >
                                                    </td>
                                                    <td>
                                                        <div className="">
                                                            <span className="">
                                                                {customer[0].transactions.filter((item) => item.customer_id == i.id)[customer[0].transactions.filter((item) => item.customer_id == i.id).length - 1].date}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{customer[0].transactions.filter((item) => item.customer_id == i.id)[customer[0].transactions.filter((item) => item.customer_id == i.id).length - 1].amount} EGP</td>

                                                    <td>
                                                        <button
                                                            onClick={() => { handleClick(i.id) }}
                                                            className="btn  btn-sm btn-rounded text-primary"
                                                        >

                                                            Show Statistics
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
