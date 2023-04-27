<script>
	import ChatMessage from '$comp/chat/ChatMessage.svelte';

	let nameMe='Me';
	let profilePicMe='https://p0.pikist.com/photos/474/706/boy-portrait-outdoors-facial-men-s-young-t-shirt-hair-person-thumbnail.jpg';

	let nameChatPartner='Belize Guide';
	let profilePicChatPartner='https://static1.squarespace.com/static/5623c261e4b08da1710cedf0/t/60f4bf529c7c9f0ea9aab322/1626652501779/2016-KLUG-Belize-51.jpeg?format=1500w';
	
	let messages = [{"messageId":416,"message":"abc","timestamp":1587139022488.826,"sentByMe":false,"timeRead":1587139025367.015},{"messageId":417,"message":"test","timestamp":1587139034294.678,"sentByMe":true,"timeRead":1587139048713.461},{"messageId":418,"message":"a","timestamp":1587139047495.052,"sentByMe":true,"timeRead":1587139048713.461},{"messageId":419,"message":"testset","timestamp":1587139312376.663,"sentByMe":true,"timeRead":1587139336397.5078},{"messageId":420,"message":"tatta","timestamp":1587139349155.217,"sentByMe":false,"timeRead":1587139359024.353},{"messageId":426,"message":"t","timestamp":1587577393781.811,"sentByMe":false,"timeRead":1587686514958.049},{"messageId":427,"message":"aaa","timestamp":1587577411018.97,"sentByMe":false,"timeRead":1587686514958.049},{"messageId":431,"message":"a","timestamp":1587652540004.281,"sentByMe":false,"timeRead":1587686514958.049},{"messageId":432,"message":"u","timestamp":1587686520069.1272,"sentByMe":true,"timeRead":1587687940655.5369},{"messageId":433,"message":"a","timestamp":1587782491376.533,"sentByMe":false,"timeRead":1589814592979.757}];

let todayMessages =[
{"messageId":420,"message":"Hey did you receive my message last night? ","timestamp":1587139349155.217,"sentByMe":false,"timeRead":1587139359024.353},		  {"messageId":426,"message":"Are you there?","timestamp":1587577393781.811,"sentByMe":false,"timeRead":1587686514958.049},
	{"messageId":418,"message":"hey","timestamp":1587139047495.052,"sentByMe":true,"timeRead":1587686514958},{"messageId":419,"message":"Yes!","timestamp":1587139312376.663,"sentByMe":true,"timeRead":0},
];

</script>





<div class="card max-w-md max-h-screen ">
    <header class="card-header border-b border-gray-500">
        <div class="flex items-center m-4  ">
            <img class="w-14 h-14 rounded-full" src={profilePicChatPartner} alt="profilePic">
            <h2 class="contacts-name m-3">{nameChatPartner}</h2>
        </div>
    </header>
    <div class="card-body overflow-scroll max-h-96 scrollbar-hide">
        <div class="">
            {#each messages as message}
                <div class="m-2 mt-4">
                <ChatMessage
                    nameMe = {nameMe}
                    profilePicMe = {profilePicMe}
                    nameChatPartner = {nameChatPartner}
                    profilePicChatPartner = {profilePicChatPartner}
										message={message.message}
									  timestamp={message.timestamp}
										sentByMe={message.sentByMe} 
										timeRead={message.timeRead}
                                        isToday={false} 
										/>
                </div>
            {/each}
            <div class="m-2 mt-4">
                <div class="flex justify-center ">
                    <div class="card variant-filled-primary p-2 px-4 text-xs m-2">Today</div>
                </div>
					
					 {#each todayMessages as todayMessage}
                <ChatMessage
                    nameMe = {nameMe}
                    profilePicMe = {profilePicMe}
                    nameChatPartner = {nameChatPartner}
                    profilePicChatPartner = {profilePicChatPartner}
										message={todayMessage.message}
									  timestamp={todayMessage.timestamp}
										sentByMe={todayMessage.sentByMe} 
										timeRead={todayMessage.timeRead}										
										isToday={true} 														 
										/>
            {/each}
        </div>
        </div>
    </div>
    <footer class="card-footer border-t border-gray-500 p-3">
        <div class="input-group grid-cols-8">
            <input class="col-span-6" type="text" placeholder="Search..." />
            <button class="variant-filled-primary  col-span-2">Send </button>
        </div>
        
    </footer>
</div>

<style>
    /* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>