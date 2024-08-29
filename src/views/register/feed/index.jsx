import MilkInput from '@/components/tracking/milk-input'
import styles from './styles.module.scss'
import { format } from 'date-fns'
import { Link } from 'wouter'

const FeedView = () => {
    return (
        <div className={styles.container}>
            <MilkInput />

            <div className={styles.formInput}>
                <label htmlFor="feedingTime">Feeding time</label>

                <input
                    type="datetime-local"
                    id="feedingTime"
                    name="feedingTime"
                    defaultValue={format(new Date(), `yyyy-MM-dd'T'HH:mm`)}
                />
            </div>

            <div>
                <label htmlFor="source">Source</label>
                <select name="source" id="source" aria-label="Source" required>
                    <option selected disabled>
                        Select source...
                    </option>
                    <option>Formula</option>
                    <option>Breast</option>
                </select>
            </div>

            <div>
                <label htmlFor="notes">Notes (optional)</label>
                <textarea name="notes" id="notes" rows="3"></textarea>
            </div>

            <button type="submit">Submit</button>
            <Link href="/" className="button outline secondary">
                Cancel
            </Link>
        </div>
    )
}

export default FeedView
