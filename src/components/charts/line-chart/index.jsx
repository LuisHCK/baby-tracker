import { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const LineChart = ({ className = '', data = {}, options = {}, onInit = () => {} }) => {
    const canvasRef = useRef(null)
    const chartRef = useRef(null)

    const renderChart = useCallback(async () => {
        if (!canvasRef.current) return

        // Dynamically import Chart.js and only needed components
        const ChartJS = await import('chart.js/auto')
        const { Chart } = ChartJS

        chartRef.current = new Chart(canvasRef.current, {
            type: 'line',
            data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                ...options
            }
        })

        chartRef.current.update('logarithmic')

        onInit?.(chartRef.current)
    }, [canvasRef, data, options, onInit])

    const destroyChart = () => {
        if (chartRef.current) {
            chartRef.current.destroy()
            chartRef.current = null
        }
    }

    useEffect(() => {
        if (!chartRef.current) return

        destroyChart()

        setTimeout(() => {
            renderChart()
        }, 100)
    }, [data.labels, data.datasets, options, renderChart])

    useEffect(() => {
        renderChart()

        return () => destroyChart()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={className}>
            <canvas ref={canvasRef} id="lorem-ipsum" />
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
