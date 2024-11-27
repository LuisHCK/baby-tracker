import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Chart } from 'chart.js'

const LineChart = ({ className = '', data = {}, options = {}, onInit = () => {} }) => {
    const canvasRef = useRef(null)
    const [chartInstance, setChartInstance] = useState(null)

    useEffect(() => {
        if (!!data && !!canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d')
            const chart = new Chart(ctx, {
                type: 'line',
                data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    ...options
                }
            })

            setChartInstance(chart)
        }
    }, [data, canvasRef, options])

    useEffect(() => {
        if (chartInstance) {
            onInit?.(chartInstance)
        }
    }, [chartInstance, onInit])

    return (
        <div className={className}>
            <canvas ref={canvasRef} />
        </div>
    )
}

LineChart.propTypes = {
    className: PropTypes.string,
    onInit: PropTypes.func,
    data: PropTypes.shape({
        labels: PropTypes.arrayOf(PropTypes.string),
        datasets: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                data: PropTypes.arrayOf(PropTypes.number),
                borderColor: PropTypes.string,
                backgroundColor: PropTypes.string,
                fill: PropTypes.bool
            })
        )
    }),
    options: PropTypes.shape({
        scales: PropTypes.shape({
            xAxes: PropTypes.arrayOf(
                PropTypes.shape({
                    type: PropTypes.string,
                    gridLines: PropTypes.shape({
                        display: PropTypes.bool
                    })
                })
            ),
            yAxes: PropTypes.arrayOf(
                PropTypes.shape({
                    type: PropTypes.string,
                    gridLines: PropTypes.shape({
                        display: PropTypes.bool
                    })
                })
            )
        }),
        tooltips: PropTypes.shape({
            enabled: PropTypes.bool,
            mode: PropTypes.string,
            intersect: PropTypes.bool,
            callbacks: PropTypes.shape({
                label: PropTypes.func
            })
        }),
        legend: PropTypes.shape({
            display: PropTypes.bool,
            position: PropTypes.string
        })
    })
}

export default LineChart
