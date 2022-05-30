//페이지 로드 이벤트
$( window ).load( function () {
	var grid = new Isotope( '.contents', { //배치할 요소를 감싸고 있는 부모 요소
		itemSelector: '.con', //배치할 요소
		columnWidth: '.con', //너비를 구할 요소
		transitionDuration: '0.4s' //화면 재배치시 요소가 움직이는 속도
	} );

	// 클릭할 모든 버튼 요소 변수에 저장
	var btns = $( 'main ul li' );
	var items = $( '.con' );
	var modal = $( '.modal' );
	var close = modal.find( 'span' );

	// 필터 버튼에 클릭 이벤트 발생 시
	btns.click( function ( e ) {
		e.preventDefault();

		// 변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
		var sort = $( this ).find( 'a' ).attr( 'href' );

		// grid에 저장된 결과값을 불러와 재정렬 기능 연결
		grid.arrange( {
			// 옵션값으로 sort변수값 지정
			filter: sort
		} );


		//모든 버튼의 클래스 'on'을 제거해 비활성화
		btns.removeClass( 'on' );
		// 클릭한 버튼에 클래스 'on'을 추가해 활성화
		$(this).addClass('on');
	});

	// .con 요소에 클릭 이벤트 발생 시
	items.click( function () {
		// 제목과 본문의 내용, 그리고 img 요소의 src값을 각 변수에 저장 
		var tit = $( this ).find( 'h2' ).text();
		var txt = $( this ).find( 'p' ).text();
		var imgSrc = $( this ).find( 'img' ).attr( 'src' );

		// .modal 요소 안쪽의 콘텐츠에 변수 내용 적용
		modal.find( 'h1' ).text( tit );
		modal.find( 'p' ).text( txt );
		modal.find( 'img' ).attr( 'src', imgSrc );

		// a 요소가 있으면 복제해서 모달에 추가해
		if ( $( this ).find( 'a' ) ) {
			var anc = $( this ).find( 'a' ).clone();
			modal.find( '.txt' ).append( anc );
		}

		// .modal 요소에 클래스 'on'을 붙여 팝업 레이어 활성화
		modal.addClass( 'on' );
		// .modal 실행 시 콘텐츠 스크롤 비활성화
		$( 'body' ).css( 'overflow', 'hidden' );
	} );

	// 닫기 버튼 클릭 이벤트 발생 시 
	close.click( function () {
		// .modal 요소의 클래스 'on'을 제거해 비활성화
		modal.removeClass( 'on' );
		// .modal 종료 시 콘텐츠 스크롤 활성화
		$( 'body' ).css( 'overflow', 'auto' );
		// .modal 내부 a 요소 제거
		modal.find( 'a' ).remove();
	} );

} );