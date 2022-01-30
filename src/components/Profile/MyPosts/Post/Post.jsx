import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='http://pristor.ru/wp-content/uploads/2018/01/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-13.jpg' />
			{props.message}
			<div>
			<span>Like
				<div>
					{props.likes}
				</div>
			</span>
			</div>
		</div>
	)
}
export default Post
